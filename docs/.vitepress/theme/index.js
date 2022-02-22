import { Owl } from '@yiird/owl';
import { defineAsyncComponent } from 'vue';
import DefaultTheme from './default';
import DocsLayout from './DocsLayout.vue';

export default {
	...DefaultTheme,
	Layout: DocsLayout,
	enhanceApp({ app }) {
		const demos = import.meta.globEager('../components/*.vue');

		Object.keys(demos).forEach(async (component) => {
			const asyncComponent = defineAsyncComponent(() => import(/* @vite-ignore */ component));
			app.component((component && component.split('/').pop()?.split('.')[0]) || '', asyncComponent);
		});

		app.use(Owl);
	}
};
