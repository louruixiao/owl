import { computed, ExtractPropTypes, getCurrentInstance, handleError, inject, PropType } from 'vue';
import { ParentOptions } from '..';
import { OComponentInstance, OPrefabDefine, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from '../../types/base-define';
import { BaseProps } from '../props/base-props';
import { withPrefab } from '../withPrefab';

interface ColumnOptions {
	/**
	 * `column布局` 跨度，如果不做响应配置，默认使用的跨度
	 * @prop
	 */
	span?: number;
	/**
	 * `column布局` 屏幕宽度0到576px时的跨度，无需设置，列宽度始终100%
	 * @prop
	 */
	xs?: number;
	/**
	 * `column布局` 屏幕宽度576px到768px时的跨度
	 * @prop
	 */
	sm?: number;
	/**
	 * `column布局` 屏幕宽度768px到992px时的跨度
	 * @prop
	 */
	md?: number;
	/**
	 * `column布局` 屏幕宽度992px到1200px时的跨度
	 * @prop
	 */
	lg?: number;
	/**
	 * `column布局` 屏幕宽度1200px到1400px时的跨度
	 * @prop
	 */
	xl?: number;
	/**
	 * `column布局` 屏幕宽度大于1400px时的跨度
	 * @prop
	 */
	xxl?: number;
}

const LayoutItemProps = {
	...BaseProps,
	options: Object as PropType<ColumnOptions>,
	/**
	 * `framework布局` 指定在容器中的位置
	 * @prop
	 * @values `top` `bottom` `left` `right` `center`
	 */
	position: {
		type: String as PropType<'top' | 'bottom' | 'left' | 'right' | 'center'>,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['top', 'bottom', 'left', 'right', 'center'].indexOf(value) !== -1;
		}
	}
} as const;

type OLayoutItemExpose = OPrefabExpose;

type OLayoutItemPrivate = OPrefabPrivate;

type OLayoutItemPrefabDefine = OLayoutItemExpose & OLayoutItemPrivate;

type OLayoutItemPropsDefine = Readonly<ExtractPropTypes<typeof LayoutItemProps>>;

type OLayoutItemPrefabOptionsDefine = OPrefabOptionsDefine<OLayoutItemPropsDefine>;

type OLayoutItemInstance = Omit<OComponentInstance<OLayoutItemPropsDefine, OLayoutItemPrefabDefine>, keyof OLayoutItemPrivate>;

const initColumn = (props: OLayoutItemPropsDefine, prefab: OPrefabDefine) => {
	const itemOptions = props.options;
	if (!itemOptions) return;
	const spanClass = computed(() => {
		return prefab.bemModifier__((itemOptions.span || 1) + '');
	});

	const obtainXsClass = computed(() => {
		return !itemOptions.xs || prefab.bemModifier__('xs-' + itemOptions.xs);
	});

	const obtainSmClass = computed(() => {
		return !itemOptions.sm || prefab.bemModifier__('sm-' + itemOptions.sm);
	});

	const obtainMdClass = computed(() => {
		return !itemOptions.md || prefab.bemModifier__('md-' + itemOptions.md);
	});

	const obtainLgClass = computed(() => {
		return !itemOptions.lg || prefab.bemModifier__('lg-' + itemOptions.lg);
	});

	const obtainXlClass = computed(() => {
		return !itemOptions.xl || prefab.bemModifier__('xl-' + itemOptions.xl);
	});

	const obtainXxlClass = computed(() => {
		return !itemOptions.xxl || prefab.bemModifier__('xxl-' + itemOptions.xxl);
	});
	prefab.addClass([spanClass, obtainXsClass, obtainSmClass, obtainMdClass, obtainLgClass, obtainXlClass, obtainXxlClass]);
};

const initFrameWork = (props: OLayoutItemPropsDefine, prefab: OPrefabDefine, idx: number) => {
	switch (idx) {
		case 0: {
			prefab.addClass(prefab.bemElement__('top'));
			break;
		}
		case 1: {
			prefab.addClass(prefab.bemElement__('left'));
			break;
		}
		case 2: {
			prefab.addClass(prefab.bemElement__('right'));
			break;
		}
		case 3: {
			prefab.addClass(prefab.bemElement__('center'));
			break;
		}
		case 4: {
			prefab.addClass(prefab.bemElement__('bottom'));
			break;
		}
		default: {
			handleError(new Error('required 4 items in layout mode="framework", but got more'), getCurrentInstance(), 11, true);
			break;
		}
	}
};

const withLayoutItem = (options: OLayoutItemPrefabOptionsDefine): OLayoutItemPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);

	const parentOptions = inject<ParentOptions>('parentOptions');

	if (parentOptions) {
		const mode = parentOptions?.mode;
		const count = parentOptions?.count;
		const idx = count.value++;
		if (mode === 'column-12' || mode === 'column-24') {
			initColumn(props, prefab);
		} else if (mode === 'framework') {
			initFrameWork(props, prefab, idx);
		}
	}

	return prefab;
};

export { withLayoutItem, LayoutItemProps, OLayoutItemInstance };
