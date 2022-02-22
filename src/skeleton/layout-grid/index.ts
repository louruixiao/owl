import { App } from 'vue';
import OLayoutGrid from './o-layout-grid.vue';

OLayoutGrid.install = (app: App) => {
	app.component(OLayoutGrid.name, OLayoutGrid);
};

export { OLayoutGrid };
