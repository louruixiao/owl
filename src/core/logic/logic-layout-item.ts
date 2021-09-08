import { OPrefabOptionsDefine } from '@owl/define';
import { OLayoutItemExpose, OLayoutItemPrefabDefine } from '@owl/define/';
import { computed, PropType } from 'vue';
import { BaseProps } from '../base-props';
import { withPrefab } from '../withPrefab';

const LayoutItemProps = {
	...BaseProps,
	/**
	 * 跨度，如果不做响应配置，默认使用的跨度
	 * @prop
	 */
	span: Number as PropType<number>,
	/**
	 * 屏幕宽度0到576px时的跨度，无需设置，列宽度始终100%
	 * @prop
	 */
	xs: [Number, Object] as PropType<number | Record<string, unknown>>,
	/**
	 * 屏幕宽度576px到768px时的跨度
	 * @prop
	 */
	sm: [Number, Object] as PropType<number | Record<string, unknown>>,
	/**
	 * 屏幕宽度768px到992px时的跨度
	 * @prop
	 */
	md: [Number, Object] as PropType<number | Record<string, unknown>>,
	/**
	 * 屏幕宽度992px到1200px时的跨度
	 * @prop
	 */
	lg: [Number, Object] as PropType<number | Record<string, unknown>>,
	/**
	 * 屏幕宽度1200px到1400px时的跨度
	 * @prop
	 */
	xl: [Number, Object] as PropType<number | Record<string, unknown>>,
	/**
	 * 屏幕宽度大于1400px时的跨度
	 * @prop
	 */
	xxl: [Number, Object] as PropType<number | Record<string, unknown>>
} as const;

const withLayoutItem = (options: OPrefabOptionsDefine): OLayoutItemPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: OLayoutItemExpose = {};

	const spanClass = computed(() => {
		return prefab.bemModifier__((props.span || props.xxl || props.xl || props.lg || props.md || props.sm || props.xs || 1) + '');
	});

	const obtainXsClass = computed(() => {
		return !props.xs || prefab.bemModifier__('xs-' + props.xs);
	});

	const obtainSmClass = computed(() => {
		return !props.sm || prefab.bemModifier__('sm-' + props.sm);
	});

	const obtainMdClass = computed(() => {
		return !props.md || prefab.bemModifier__('md-' + props.md);
	});

	const obtainLgClass = computed(() => {
		return !props.lg || prefab.bemModifier__('lg-' + props.lg);
	});

	const obtainXlClass = computed(() => {
		return !props.xl || prefab.bemModifier__('xl-' + props.xl);
	});

	const obtainXxlClass = computed(() => {
		return !props.xxl || prefab.bemModifier__('xxl-' + props.xxl);
	});

	prefab.addClass([spanClass, obtainXsClass, obtainSmClass, obtainMdClass, obtainLgClass, obtainXlClass, obtainXxlClass]);

	return {
		...prefab,
		...expose
	};
};
export { withLayoutItem, LayoutItemProps };
