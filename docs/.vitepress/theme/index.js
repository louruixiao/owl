import { Owl } from '@yiird/owl';
import DefaultTheme from 'vitepress/theme';
import GridSystemDemo from '../components/GridSystemDemo.vue';
import IconAnimateDemo from '../components/IconAnimateDemo.vue';
import IconSizeDemo from '../components/IconSizeDemo.vue';
import IconTypeDemo from '../components/IconTypeDemo.vue';
import LayoutDemo from '../components/LayoutDemo.vue';

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(Owl);
		app.component('IconSizeDemo', IconSizeDemo);
		app.component('IconTypeDemo', IconTypeDemo);
		app.component('IconAnimateDemo', IconAnimateDemo);
		app.component('GridSystemDemo', GridSystemDemo);
		app.component('LayoutDemo', LayoutDemo);
	}
};
