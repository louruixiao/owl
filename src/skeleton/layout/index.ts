import { App } from 'vue';
import OLayout from './o-layout.vue';

OLayout.install = (app: App) => {
	app.component(OLayout.name, OLayout);
};

export { OLayout };
