import { isNumber, isObject } from 'lodash-es';
import { computed, ExtractPropTypes, PropType, provide, ref, Ref, watchEffect } from 'vue';
import { OComponentInstance, OGutter, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from '../../types/base-define';
import { BaseProps } from '../props/base-props';
import { withPrefab } from '../withPrefab';

const LayoutProps = {
	...BaseProps,
	/**
	 * 布局模式
	 * @prop
	 * @values `framework`, `column-12`, `column-24`
	 */
	mode: {
		type: String as PropType<'framework' | 'column-12' | 'column-24'>,
		required: true,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['framework', 'column-12', 'column-24'].indexOf(value) !== -1;
		}
	},
	/**
	 * 间距，数字或字符串统一设置水平垂直间距，当为对象时{h:'水平间距',v:'垂直间距'}<br>
	 * 数字单位默认为px
	 * @Prop
	 */
	gutter: {
		type: [Number, String, Object] as PropType<number | string | OGutter>,
		default: 10
	}
} as const;

type OLayoutExpose = OPrefabExpose;

type OLayoutPrivate = OPrefabPrivate;

type OLayoutPropsDefine = Readonly<ExtractPropTypes<typeof LayoutProps>>;

type OLayoutPrefabOptionsDefine = OPrefabOptionsDefine<OLayoutPropsDefine>;

type OLayoutPrefabDefine = OLayoutExpose & OLayoutPrivate;

type OLayoutInstance = Omit<OComponentInstance<OLayoutPropsDefine, OLayoutPrefabDefine>, keyof OLayoutPrivate>;

type ParentOptions = {
	mode: string;
	count: Ref<number>;
};

const withLayout = (options: OLayoutPrefabOptionsDefine): OLayoutPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);

	const obtainModeClass = computed(() => {
		return prefab.cType__ + '--' + props.mode;
	});

	prefab.addClass([obtainModeClass]);

	const mode = props.mode;
	const count = ref(0);

	const parentOptions: ParentOptions = {
		mode,
		count
	};

	provide('parentOptions', parentOptions);

	watchEffect(() => {
		if (isObject(props.gutter)) {
			const gutter = props.gutter as OGutter;
			prefab.cssVar('gutter-h', isNumber(gutter.h) ? gutter.h + 'px' : gutter.h);
			prefab.cssVar('gutter-v', isNumber(gutter.v) ? gutter.v + 'px' : gutter.v);
		} else {
			if (isNumber(props.gutter)) {
				prefab.cssVar('gutter-h', isNumber(props.gutter) ? props.gutter + 'px' : props.gutter);
				prefab.cssVar('gutter-v', isNumber(props.gutter) ? props.gutter + 'px' : props.gutter);
			}
		}
	});

	return prefab;
};
export { withLayout, LayoutProps, OLayoutPropsDefine, OLayoutInstance, ParentOptions };
