import { without } from 'lodash-es';
import { computed, PropType, ref } from 'vue';
import { OIconExpose, OIconPrefabDefine, OPrefabOptionsDefine } from '../../define';
import { BaseProps } from '../base-props';
import { withPrefab } from '../withPrefab';

const IconProps = {
	...BaseProps,
	/**
	 * 图片名称[图片查询](/icons/all.html "滚动条配置")
	 * @prop
	 */
	name: {
		type: String as PropType<string>,
		required: true
	},
	/**
	 * [图片风格](/owl/guide/IconType.html#风格)
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
		type: String as PropType<string | 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'>,
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
		default: true
	},
	/**
	 * 旋转 90 180 270读
	 * @prop
	 * @values `90` `180` `270`
	 */
	rotation: {
		type: Number as PropType<90 | 180 | 270>,
		validator: (value: number) => {
			// 这个值必须匹配下列字符串中的一个
			return [90, 180, 270].indexOf(value) !== -1;
		}
	},
	/**
	 * 翻转
	 * @prop
	 * @values `horizontal`, `vertical`, `both`
	 */
	flip: {
		type: String as PropType<'horizontal' | 'vertical' | 'both'>,
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
	 * 动画--脉冲式旋转
	 */
	pulse: {
		type: Boolean as PropType<boolean>
	},
	/**
	 * 动画--平滑旋转
	 */
	spin: {
		type: Boolean as PropType<boolean>
	},
	/**
	 * 动画`beat`:心跳,`fade`:淡化,`flash`:闪烁,`spin`:旋转（同属性`:spin="true"`）,`spin-pulse`:脉冲旋转（同`:pulse="true"`）,
	 */
	animiate: {
		type: Array as PropType<Array<'beat' | 'fade' | 'flash' | 'pulse' | 'flip' | 'spin' | 'spin-reverse'>>,
		validator: (value: Array<string>) => {
			return without(value, 'beat', 'fade', 'flash', 'pulse', 'flip', 'spin', 'spin-reverse').length === 0;
		}
	}
} as const;

/**
 *
 * icon核心逻辑
 *
 * @param {OPrefabOptionsDefine} options
 * @returns
 */
const withIcon = (options: OPrefabOptionsDefine): OIconPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: OIconExpose = {};

	const obtainIcon = ref<Array<string>>([]);

	const animiateClass = computed(() => {
		return !props.animiate || 'fa-' + (props.animiate as Array<string>).join(' fa-');
	});

	const sizeClass = computed(() => {
		return !props.size || 'fa-' + props.size;
	});

	prefab.addClass([animiateClass, sizeClass]);

	obtainIcon.value = [props.type as string, props.name as string];
	return {
		...prefab,
		...expose,
		obtainIcon
	};
};

export { withIcon, IconProps };
