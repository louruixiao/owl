import { App } from 'vue';
import OLayoutItem from './o-layout-item.vue';

OLayoutItem.install = (app: App) => {
	app.component(OLayoutItem.name, OLayoutItem);
};

export { OLayoutItem };
