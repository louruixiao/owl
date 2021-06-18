import { forEach } from 'lodash';
import { App, Plugin } from 'vue';
import * as components from '@owl/themes/default';

export const Owl: Plugin = {
	install(app: App) {
		forEach(components, (component, name) => {
			app.component(name, component);
		});
	}
};

export type { PrefabDefine, OwlComponentInstance, OwlWithOptions, OButtonInstance, ButtonExpose } from '@owl/core/types';
export { addClass } from '@owl/utils/dom';
