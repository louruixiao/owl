import { computed, PropType } from 'vue';
import { OButtonExpose, OButtonPrefabDefine, OPrefabOptionsDefine } from '../../define';
import { BaseProps } from '../base-props';
import { withPrefab } from '../withPrefab';

const ButtonProps = {
	...BaseProps,
	/**
	 * 尺寸
	 * @prop
	 * @values `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
	 */
	size: {
		type: String as PropType<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
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
		type: String,
		required: false,
		default: function () {
			return '1111';
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

/**
 * button核心逻辑
 *
 * @param {OPrefabOptionsDefine} options
 * @returns {OButtonPrefabDefine}
 */
const withButton = (options: OPrefabOptionsDefine): OButtonPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: OButtonExpose = {};

	//尺寸样式
	const obtainSizeClass = computed(() => {
		return !props.size || prefab.cType__ + '--' + props.size;
	});

	const obtainShapeClass = computed(() => {
		return !props.shape || prefab.cType__ + '--' + props.shape;
	});

	const obtainDisabledClass = computed(() => {
		return !props.disabled || prefab.cType__ + '--disabled';
	});

	prefab.addClass([obtainSizeClass, obtainShapeClass, obtainDisabledClass]);

	return {
		...prefab,
		...expose
	};
};

export { withButton, ButtonProps };
