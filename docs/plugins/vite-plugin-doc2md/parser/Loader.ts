import { tsquery } from '@phenomnomnominal/tsquery';
import fs from 'fs';
import path from 'path';
import { ImportDeclaration } from 'typescript';
import { LoaderOptions } from './types';
import { getFilePath } from './util';

class FileMap {
	map: Map<string, Record<string, string>>;
	constructor() {
		this.map = new Map();
	}
	add(filePath: string, fileContent: string) {
		const ext = path.parse(filePath).ext;
		let extMap = this.map.get(ext) || {};
		extMap[filePath] = fileContent;
		if (!this.map.get(ext)) {
			this.map.set(ext, extMap);
		}
	}
	addAll(filemaps: { filePath: string; fileContent: string }[]) {
		filemaps.forEach((filemap) => {
			this.add(filemap.filePath, filemap.fileContent);
		});
	}
	getFileByExt(ext: string): string[] {
		const extMap = this.map.get(ext);
		return extMap ? Object.keys(extMap) : [];
	}
	getFileContent(filePath: string): string | undefined {
		const ext = path.parse(filePath).ext;
		const extMap = this.map.get(ext);
		return extMap ? extMap[filePath] : undefined;
	}
	setFileContent(filePath: string, fileContent: string) {
		const ext = path.parse(filePath).ext;
		const extMap = this.map.get(ext);
		if (extMap) {
			extMap[filePath] = fileContent;
		}
	}
}

export class FileLoader {
	loaderOptions: LoaderOptions;
	fileMap: FileMap;
	reference: Record<string, string[]> = {};
	constructor(loaderOptions: LoaderOptions) {
		this.loaderOptions = loaderOptions;
		this.fileMap = new FileMap();
		if (loaderOptions.scanDirs instanceof Array) {
			this.scanFiles(loaderOptions.scanDirs);
		} else {
			this.scanFile(loaderOptions.scanDirs);
		}

		this.fileMap.getFileByExt('.vue')?.forEach((filePath) => {
			const fileContent = this.getSource(filePath);
			if (fileContent) {
				this.referenceFile(filePath, filePath, fileContent);
			}
		});
	}

	private scanFiles(dirs: string[]): void {
		dirs.forEach((dir) => {
			this.scanFile(dir);
		});
	}

	private scanFile(dir: string): void {
		const files = fs.readdirSync(path.join(this.loaderOptions.root!, dir));
		files.forEach((item) => {
			var fullPath = path.join(this.loaderOptions.root!, dir, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {
				this.scanFile(path.join(dir, item));
			} else {
				const ext = path.parse(fullPath).ext;
				if (this.loaderOptions.fileTypes.includes(ext)) {
					const fileContent = fs.readFileSync(fullPath, 'utf-8');
					this.fileMap.add(fullPath, fileContent);
				}
			}
		});
	}

	private referenceFile(mainFile: string, vueFile: string, fileContent: string) {
		const selector = 'ImportDeclaration';
		const nodes = tsquery(tsquery.ast(fileContent), selector);
		nodes.map((node) => {
			const importer = (<ImportDeclaration>node).moduleSpecifier.getText().replace(/[\s|\'|\"]/g, '');
			const importerPath = getFilePath(this, mainFile, importer);
			if (importerPath) {
				this.pushReference(importerPath, vueFile);
				const importerContent = this.getSource(importerPath);
				if (importerContent) {
					this.referenceFile(importerPath, vueFile, importerContent);
				}
			}
		});
	}

	private pushReference(importerPath: string, vueFile: string) {
		if (!this.reference[importerPath]) {
			this.reference[importerPath] = [];
		}
		if (this.reference[importerPath].indexOf(vueFile) == -1) {
			this.reference[importerPath].push(vueFile);
		}
	}

	getReferrer(filename: string) {
		const result: string[] = [];
		const referrer = this.reference[filename];
		if (referrer && referrer.length > 0) {
			result.push(...referrer);
			referrer.forEach((ref) => {
				result.push(...this.getReferrer(ref));
			});
		}
		return result;
	}

	getSource(refFilePath: string): string | undefined {
		return this.fileMap.getFileContent(refFilePath);
	}
	getAlias(): string[] | undefined {
		const aliasMap = this.loaderOptions.alias;
		if (aliasMap) {
			return Object.keys(aliasMap);
		}
	}
	getAliasMapping(alias: string): string | undefined {
		const aliasMap = this.loaderOptions.alias;
		if (aliasMap) {
			return aliasMap[alias];
		}
	}
}
