import { dom, IconDefinition, IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as components from '@owl/themes/skeleton';
import { forEach } from 'lodash-es';
import { App } from 'vue';

const install = (app: App): void => {
	app.component('FontAwesomeIcon', FontAwesomeIcon);
	forEach(components, (component, name) => {
		app.component(name, component);
	});
	dom.watch();
};

const addIcon = (...definitions: (IconDefinition | IconPack)[]): void => {
	library.add(...definitions);
};

export type { OButtonInstance as OwlButtonInstance, OIconInstance as OwlIconInstance } from '@owl/define';
export { addClass } from '@owl/utils/dom';
export { install, addIcon };

export const Owl = {
	install
};
