import { PropType } from 'vue';
import { BaseProps } from './base-props';

export const LayoutGridProps = {
	...BaseProps,
	/**
	 * 设置列
	 * @prop
	 */
	columns: {
		type: [String, Array] as PropType<string | number>
	}
} as const;
