import * as Monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { ExtractPropTypes, onMounted, PropType, ref, Ref } from 'vue';
import { OComponentInstance, OPrefabDefine, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from '../../types/base-define';
import { BaseProps } from '../props/base-props';
import { withPrefab } from '../withPrefab';
if (self.MonacoEnvironment) {
	self.MonacoEnvironment = {
		getWorker(_, label) {
			if (label === 'json') {
				return new jsonWorker();
			}
			if (label === 'css' || label === 'scss' || label === 'less') {
				return new cssWorker();
			}
			if (label === 'html' || label === 'handlebars' || label === 'razor') {
				return new htmlWorker();
			}
			if (label === 'typescript' || label === 'javascript') {
				return new tsWorker();
			}
			return new editorWorker();
		}
	};
}

const CodeEditorProps = {
	...BaseProps,
	code: {
		type: String as PropType<string>,
		required: true
	},
	language: {
		type: String as PropType<'javascript' | 'json'>,
		default: 'json'
	},
	height: String,
	width: String
} as const;

type OCodeEditorExpose = OPrefabExpose;

type OCodeEditorPrivate = OPrefabPrivate & {
	containerRef: Ref<HTMLElement>;
	containerClass: string;
};

type OCodeEditorPrefabDefine = OCodeEditorExpose & OCodeEditorPrivate;

type OCodeEditorPropsDefine = Readonly<ExtractPropTypes<typeof CodeEditorProps>>;

type OCodeEditorPrefabOptionsDefine = OPrefabOptionsDefine<OCodeEditorPropsDefine>;

type OCodeEditorInstance = Omit<OComponentInstance<OCodeEditorPropsDefine, OCodeEditorPrefabDefine>, keyof OCodeEditorPrivate>;

/**
 * button核心逻辑
 *
 * @param {OCodeEditorPrefabOptionsDefine} options
 * @returns {OCodeEditorPrefabDefine}
 */
const withCodeEditor = (options: OCodeEditorPrefabOptionsDefine): OCodeEditorPrefabDefine => {
	const { props } = options;
	const prefab: OPrefabDefine = withPrefab(options);

	const containerRef = ref();
	onMounted(() => {
		Monaco.editor.EditorOptions;
		const editor = Monaco.editor.create(containerRef.value, {
			value: props.code,
			language: props.language,
			formatOnPaste: true,
			tabSize: 2,
			minimap: {
				enabled: false
			}
		});
		editor.onDidChangeModelContent((event) => {
			console.log(editor.getValue());
		});
	});

	const containerClass = prefab.bemElement__('container');

	return {
		...prefab,
		containerRef,
		containerClass
	};
};

export { withCodeEditor, CodeEditorProps, OCodeEditorPropsDefine, OCodeEditorInstance };
