import { App } from 'vue';
import OCodeEditor from './o-code-editor.vue';

OCodeEditor.install = (app: App) => {
	app.component(OCodeEditor.name, OCodeEditor);
};

export { OCodeEditor };
