import { App } from 'vue';
import OLayoutItem from './o-layout-item.vue';
import OLayout from './o-layout.vue';

OLayout.install = (app: App) => {
	app.component(OLayout.name, OLayout);
	app.component(OLayoutItem.name, OLayoutItem);
};

export { OLayout, OLayoutItem };
