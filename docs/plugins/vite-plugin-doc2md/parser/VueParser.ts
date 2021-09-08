import { AbstractRegExpParser } from './AbstractParser';
import { ScriptParser } from './ScriptParser';
import { TemplateParser } from './TemplateParser';
import { ExtractResult, Comment, ParserOptions } from './types';

export interface VueComponent {
	name: string;
	description?: string;
	props?: Comment;
	methods?: Comment;
	slots?: Comment;
	setup?: Comment;
}

export class VueParser extends AbstractRegExpParser<VueComponent> {
	scriptParser: ScriptParser;
	templateParser: TemplateParser;
	constructor(options: ParserOptions, filePath: string, input?: string) {
		const vueRegex = {
			template: /<template>([\s\S]*?)<\/template>/i,
			script: /<script.*>([\s\S]*?)<\/script>/i
		};
		super('vue', vueRegex, input || options.loader!.getSource(filePath));
		this.scriptParser = new ScriptParser(options, filePath);
		this.templateParser = new TemplateParser();
	}
	doParser(extracts: ExtractResult[]): VueComponent {
		const component: VueComponent = {} as VueComponent;
		extracts.forEach((extract) => {
			if (extract.type === 'script') {
				const scriptComments = this.scriptParser.run(extract.matched[1]);
				Object.assign(component, scriptComments);
			}

			if (extract.type === 'template') {
				const templateComments = this.templateParser.run(extract.matched[1]);
				Object.assign(component, templateComments);
			}
		});
		return component;
	}

	rest(): boolean {
		return true;
	}
}
