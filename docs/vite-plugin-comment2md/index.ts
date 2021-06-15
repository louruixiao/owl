import { HmrContext, Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
const file = path.resolve(__dirname, './text.log');

export function extractCommentsPlugin(): Plugin {
	return {
		name: 'extract-comments-plugin',
		handleHotUpdate(ctx: HmrContext) {
			console.log('更改:', ctx.file);
			console.log('类型:', ctx.read());
			fs.writeFileSync(file, ctx.file + '\n', {
				flag: 'a+'
			});
		}
	};
}
