import { OPrefabOptionsDefine } from '@owl/define';
import { OColExpose, OColPrefabDefine } from '@owl/define/grid-system-col';
import { computed, PropType } from 'vue';
import { BaseProps } from '../base-props';
import { withPrefab } from '../withPrefab';

const ColProps = {
	...BaseProps,
	/**
	 * @prop
	 */
	span: Number as PropType<number>,
	/**
	 * @prop
	 */
	xs: [Number, Object] as PropType<number | Record<string, unknown>>,
	sm: [Number, Object] as PropType<number | Record<string, unknown>>,
	md: [Number, Object] as PropType<number | Record<string, unknown>>,
	lg: [Number, Object] as PropType<number | Record<string, unknown>>,
	offset: Number as PropType<number>,
	offsetXs: [Number, Object] as PropType<number | Record<string, unknown>>,
	offsetSm: [Number, Object] as PropType<number | Record<string, unknown>>,
	offsetMd: [Number, Object] as PropType<number | Record<string, unknown>>,
	offsetLg: [Number, Object] as PropType<number | Record<string, unknown>>
} as const;

const withCol = (options: OPrefabOptionsDefine): OColPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: OColExpose = {};

	const obtainSpanClass = computed(() => {
		return !props.span || prefab.cType__ + '--span-' + props.span;
	});

	const obtainXsClass = computed(() => {
		return !props.span || prefab.cType__ + '--xs-' + props.xs;
	});

	const obtainSmClass = computed(() => {
		return !props.span || prefab.cType__ + '--sm-' + props.sm;
	});

	const obtainMdClass = computed(() => {
		return !props.span || prefab.cType__ + '--md-' + props.md;
	});

	const obtainLgClass = computed(() => {
		return !props.span || prefab.cType__ + '--lg-' + props.lg;
	});

	const obtainOffsetClass = computed(() => {
		return !props.span || prefab.cType__ + '--offset-' + props.offset;
	});

	const obtainOffsetXsClass = computed(() => {
		return !props.span || prefab.cType__ + '--offset-xs' + props.offsetXs;
	});

	const obtainOffsetSmClass = computed(() => {
		return !props.span || prefab.cType__ + '--offset-sm' + props.offsetSm;
	});

	const obtainOffsetMdClass = computed(() => {
		return !props.span || prefab.cType__ + '--offset-md' + props.offsetMd;
	});

	const obtainOffsetLgClass = computed(() => {
		return !props.span || prefab.cType__ + '--offset-lg' + props.offsetLg;
	});

	prefab.addClass([
		obtainSpanClass,
		obtainXsClass,
		obtainSmClass,
		obtainMdClass,
		obtainLgClass,
		obtainOffsetClass,
		obtainOffsetXsClass,
		obtainOffsetSmClass,
		obtainOffsetMdClass,
		obtainOffsetLgClass
	]);
	return {
		...prefab,
		...expose
	};
};
export { withCol, ColProps };
