import { DefineComponent, ComputedRef, Ref } from 'vue';
declare module '*.vue' {
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
/* 
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties extends PrefabDefine {}
}
 */
