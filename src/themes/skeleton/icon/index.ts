import { App } from 'vue';
import OIcon from './o-icon.vue';

OIcon.install = (app: App) => {
	app.component(OIcon.name, OIcon);
};

export default OIcon;
