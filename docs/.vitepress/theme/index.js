import { Owl } from '@yiird/owl';
import '@yiird/owl/dist/style.css';
import ButtonColorDemo from '../components/ButtonColorDemo.vue';
import ButtonModeDemo from '../components/ButtonModeDemo.vue';
import ButtonShapeDemo from '../components/ButtonShapeDemo.vue';
import ButtonSizeDemo from '../components/ButtonSizeDemo.vue';
import IconAnimateDemo from '../components/IconAnimateDemo.vue';
import IconFixedWidthDemo from '../components/IconFixedWidthDemo.vue';
import IconLayersDemo from '../components/IconLayersDemo.vue';
import IconNameDemo from '../components/IconNameDemo.vue';
import IconPullDemo from '../components/IconPullDemo.vue';
import IconRotateDemo from '../components/IconRotateDemo.vue';
import IconSizeDemo from '../components/IconSizeDemo.vue';
import LayoutDemo from '../components/LayoutDemo.vue';
import LayoutGridDemo from '../components/LayoutGridDemo.vue';
import DefaultTheme from './default';
import DocsLayout from './DocsLayout.vue';

export default {
	...DefaultTheme,
	Layout: DocsLayout,
	enhanceApp({ app }) {
		// eslint-disable-next-line vue/multi-word-component-names
		app.component('ButtonColorDemo', ButtonColorDemo);
		app.component('ButtonSizeDemo', ButtonSizeDemo);
		app.component('ButtonModeDemo', ButtonModeDemo);
		app.component('ButtonShapeDemo', ButtonShapeDemo);
		app.component('LayoutDemo', LayoutDemo);
		app.component('LayoutGridDemo', LayoutGridDemo);
		app.component('IconAnimateDemo', IconAnimateDemo);
		app.component('IconFixedWidthDemo', IconFixedWidthDemo);
		app.component('IconLayersDemo', IconLayersDemo);
		app.component('IconNameDemo', IconNameDemo);
		app.component('IconPullDemo', IconPullDemo);
		app.component('IconSizeDemo', IconSizeDemo);
		app.component('IconRotateDemo', IconRotateDemo);
		// Object.keys(demos).forEach(async (component) => {
		// 	const asyncComponent = defineAsyncComponent(() => import(component));
		// 	app.component((component && component.split('/').pop()?.split('.')[0]) || '', asyncComponent);
		// });

		app.use(Owl);
	}
};
