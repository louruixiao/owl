import { OThemeColor, OThemeSize } from '@owl/types';
import { PropType } from 'vue';
import { BaseProps } from './base-props';

export const ButtonProps = {
	...BaseProps,
	/**
	 * 尺寸
	 * @prop
	 * @values `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
	 */
	size: {
		type: String as PropType<OThemeSize>,
		default: 'md',
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].indexOf(value) !== -1;
		}
	},
	/**
	 * 颜色
	 * @prop
	 * @values `default`, `primary`, `success`, `warning`, `danger`
	 */
	color: {
		type: String as PropType<OThemeColor>,
		default: 'default',
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['default', 'primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
		}
	},
	/**
	 * 形状可选
	 * @prop
	 * @values `circle` 圆形, `square` 正方形, `ellipse` 椭圆形
	 */
	shape: {
		type: String
	},
	/**
	 * 是否禁用按钮
	 * @prop
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	/**
	 * 模式
	 * @prop
	 * @values `light` `empty` `link`
	 */
	mode: {
		type: String as PropType<'light' | 'empty' | 'link'>,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['light', 'empty', 'link'].indexOf(value) !== -1;
		}
	}
} as const;
