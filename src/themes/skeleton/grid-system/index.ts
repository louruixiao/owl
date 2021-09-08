import { App } from 'vue';
import OCol from './o-col.vue';
import ORow from './o-row.vue';

const OGridSystem = {
	install: (app: App): void => {
		app.component(ORow.name, ORow);
		app.component(OCol.name, OCol);
	}
};

export { OGridSystem, ORow, OCol };
