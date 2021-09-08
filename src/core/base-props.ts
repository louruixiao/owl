import { PropType } from '@vue/runtime-core';

export const BaseProps = {
	/**
	 * 组件ID
	 * @prop
	 */
	id: String as PropType<string>,
	/**
	 * 显示 or 隐藏
	 * @prop
	 */
	display: {
		type: Boolean as PropType<boolean>,
		default: true
	}
} as const;
