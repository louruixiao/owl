import { OGutter, OLayoutExpose, OLayoutPrefabDefine, OPrefabOptionsDefine } from '@owl/define';
import { isNumber, isObject } from 'lodash-es';
import { computed, PropType, watchEffect } from 'vue';
import { BaseProps } from '../base-props';
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
			return ['framework布局', 'column-12', 'column-24'].indexOf(value) !== -1;
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

const withLayout = (options: OPrefabOptionsDefine): OLayoutPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: OLayoutExpose = {};

	const obtainModeClass = computed(() => {
		return prefab.cType__ + '--' + props.mode;
	});

	prefab.addClass([obtainModeClass]);

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

	return {
		...prefab,
		...expose
	};
};
export { withLayout, LayoutProps };
