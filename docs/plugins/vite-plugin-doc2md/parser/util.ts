import fs from 'fs';
import path from 'path';
import { FileLoader } from './Loader';

export function getFilePath(loader: FileLoader, mainFile: string, refpath: string): string | undefined {
	const alias = loader.getAlias()?.filter((alias) => refpath.startsWith(alias));
	let refFilePath;
	if (alias && alias.length > 0) {
		let aliasMapping = loader.getAliasMapping(alias[0])!;
		if (alias[0].endsWith('/')) {
			if (!aliasMapping?.endsWith('/')) {
				aliasMapping += '/';
			}
		}
		refFilePath = refpath.replace(alias[0], aliasMapping).replace('//', '/');
	} else if (refpath.startsWith('./') || refpath.startsWith('../')) {
		refFilePath = resolvePath(mainFile, refpath);
	} else {
		refFilePath = resolvePath(loader.loaderOptions.root!, 'node_moudel/' + refpath);
	}
	let fullPath;

	if (fs.existsSync(refFilePath + '.ts') && fs.statSync(refFilePath + '.ts').isFile()) {
		fullPath = refFilePath + '.ts';
	} else if (fs.existsSync(refFilePath + '/index.ts') && fs.statSync(refFilePath + '/index.ts').isFile()) {
		fullPath = refFilePath + '/index.ts';
	}

	if (fullPath) return fullPath;
}

function resolvePath(filePath: string, relativePath: string): string {
	return path.resolve(filePath, '../', relativePath);
}
