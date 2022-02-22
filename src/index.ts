import { dom, IconDefinition, IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import * as components from '@owl/skeleton';
import { forEach } from 'lodash-es';
import { App } from 'vue';
import './themes/styles/index.scss';
import { OComponentInstance } from './types/base-define';

const install = (app: App): void => {
	app.component('FontAwesomeIcon', FontAwesomeIcon);
	app.component('FontAwesomeLayers', FontAwesomeLayers);
	app.component('FontAwesomeLayersText', FontAwesomeLayersText);
	forEach(components, (component, name) => {
		app.component(name, component);
	});
	if (!app.config.errorHandler) {
		app.config.errorHandler = (err, vm, info) => {
			(<Error>err).message = (<OComponentInstance>vm).cType__ + ':' + (<Error>err).message;

			console.error(err, vm, info);
		};
	}

	dom.watch();
};

const addIcon = (...definitions: (IconDefinition | IconPack)[]): void => {
	library.add(...definitions);
};

export { addClass } from '@owl/utils/dom';
export { install, addIcon };

export const Owl = {
	install
};
