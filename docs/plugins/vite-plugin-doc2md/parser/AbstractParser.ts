import { ExtractResult, ParserIfc } from './types';

export abstract class AbstractParser<N> implements ParserIfc<N> {
	name: string;
	input?: string;

	private _result: N | undefined;

	constructor(name: string, input?: string) {
		this.name = name;
		this.input = input;
	}

	get result(): N | undefined {
		return this._result;
	}

	set result(res: N | undefined) {
		this._result = res;
	}

	abstract run(input?: string): N | undefined;

	abstract doParser(extract: ExtractResult | ExtractResult[] | string): N | undefined;
	/**
	 * 是否循环取剩余部分
	 */
	abstract rest(): boolean;
}

export abstract class AbstractRegExpParser<N> extends AbstractParser<N> {
	regex: RegExp | Record<string, RegExp>;

	constructor(name: string, regex: RegExp | Record<string, RegExp>, input?: string) {
		super(name, input);
		this.name = name;
		this.input = input;
		this.regex = regex;
	}

	run(input?: string): N | undefined {
		input = input || this.input;
		if (!input) return;
		if (this.rest()) {
			let index = 0;
			const extractResults: ExtractResult[] = [];
			while (index < input.length - 1) {
				const nextContent = input.substring(index);
				const extractResult = this.extract(nextContent);
				if (extractResult) {
					const { offset } = extractResult;
					extractResults.push(extractResult);
					index += offset;
				} else {
					index++;
				}
			}
			return this.doParser(extractResults);
		} else {
			const extractResult = this.extract(input);
			if (extractResult) {
				return this.doParser(extractResult);
			}
		}
	}

	protected extract(input?: string): ExtractResult | undefined {
		input = input || this.input;
		if (!input) return;
		let targetRegex, nodeType;
		if (this.regex instanceof RegExp) {
			targetRegex = this.regex;
		} else {
			for (const key in this.regex) {
				const reg = this.regex[key];
				if (reg.test(input)) {
					targetRegex = reg;
					nodeType = key;
					break;
				}
			}
		}
		nodeType = nodeType || this.name;

		if (targetRegex && nodeType) {
			const matchResult = input.match(targetRegex);
			if (matchResult) {
				return {
					matched: matchResult,
					offset: (matchResult.index ? matchResult.index : 0) + matchResult[0].length,
					type: nodeType
				};
			}
		}
	}

	abstract doParser(extract: ExtractResult | ExtractResult[] | string): N | undefined;
	/**
	 * 是否循环取剩余部分
	 */
	abstract rest(): boolean;
}
