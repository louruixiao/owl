import { App } from 'vue';
import OButton from './o-button.vue';

OButton.install = (app: App) => {
	app.component(OButton.name, OButton);
};

export default OButton;
