import { AnimiateOptions } from '@owl/types';
import { without } from 'lodash-es';
import { PropType } from 'vue';
import { BaseProps } from './base-props';

export const IconProps = {
	...BaseProps,
	/**
	 * 图片名称[图片查询](/icons/all.html "滚动条配置")
	 * @prop
	 */
	icon: {
		type: [String, Array, Object] as PropType<Array<string> | object | string>,
		required: true
	},
	/**
	 * [图片风格](/guide/IconType.html#风格)
	 * @prop
	 * @values `fas`：solid 实体 <br> `fal`：light 清淡的<br> `far`：regular 常规的<br> `fad`：duotone 双色调<br> `fat`：thin 细的<br> `fab`：brands 品牌标识
	 */
	type: {
		type: String as PropType<'fas' | 'fal' | 'far' | 'fad' | 'fab' | 'fat'>,
		default: 'fas',
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['fas', 'fal', 'far', 'fad', 'fab', 'fat'].indexOf(value) !== -1;
		}
	},
	/**
	 * 2xs 到 2xl 的 T 恤尺寸缩放以及从 1x 到 10x 的文字尺寸
	 * @prop
	 * @values `lg`, `xs`, `sm`,  `1x`, `2x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`
	 */
	size: {
		type: String as PropType<'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'>,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
		}
	},
	/**
	 * 将图标设置为使用固定宽度会有所帮助。
	 * @prop
	 */
	fixedWidth: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	/**
	 * 旋转 90 180 270读
	 * @prop
	 * @values `90` `180` `270`
	 *
	 */
	rotation: {
		type: Number as PropType<number | 90 | 180 | 270>
		/* validator: (value: number) => {
			// 这个值必须匹配下列字符串中的一个
			return [90, 180, 270].indexOf(value) !== -1;
		} */
	},
	/**
	 * 翻转
	 * @prop
	 * @values `horizontal`, `vertical`, `both`
	 */
	flip: {
		type: String as PropType<'horizontal' | 'vertical' | 'both' | undefined>,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['horizontal', 'vertical', 'both'].indexOf(value) !== -1;
		}
	},
	/**
	 * right:在文字右侧，left:在文字左侧
	 * @prop
	 * @values `right`, `left`
	 */
	pull: {
		type: String as PropType<'right' | 'left'>,
		validator: (value: string) => {
			// 这个值必须匹配下列字符串中的一个
			return ['right', 'left'].indexOf(value) !== -1;
		}
	},
	/**
	 * 边框
	 * @prop
	 */
	border: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	/**
	 * 在图片组合时标注次要图标，颜色会因此翻转
	 * @prop
	 */
	minor: {
		type: Boolean as PropType<boolean>,
		default: false
	},
	/**
	 * 动画
	 * @prop
	 * @values `beat`:心跳,`fade`:淡化,`beat-fade`:闪烁,`flip`:翻转,`spin`:旋转,`spin-pulse`:脉冲旋转,`spin-reverse`:反方向旋转
	 */
	animiate: {
		type: [String, Array] as PropType<'beat' | 'fade' | 'beat-fade' | 'flip' | 'spin' | 'spin-pulse' | 'spin-reverse' | Array<'spin' | 'spin-pulse' | 'spin-reverse'>>
	},
	/**
	 * 动画配置选项
	 * @ref AnimiateOptions
	 * @prop
	 */
	animiateOptions: {
		type: Object as PropType<AnimiateOptions>
	},
	/**
	 * 在`beat` 和 `beat-fade` 动画中设置图标将缩放的最大值
	 * @prop
	 */
	animiateScale: Number as PropType<number>,
	/**
	 * 在`fade` 和 `beat-fade` 动画中设置图标将淡入淡出的最低不透明度值
	 * @prop
	 */
	animiateOpacity: Number as PropType<number>,
	/**
	 * 在`flip`动画中设置旋转轴
	 * @prop
	 * @values 'x' , 'y' , 'z'
	 */
	animiateFlipAxis: {
		type: [String, Array] as PropType<'x' | 'y' | 'z' | Array<'x' | 'y' | 'z'>>,
		validator: (value: string | Array<string>) => {
			return without(value, 'x', 'y', 'z').length === 0;
		}
	},
	/**
	 * 在`flip`动画中设置旋转角度
	 * @prop
	 */
	animiateFlipAngle: Number as PropType<number>
} as const;
