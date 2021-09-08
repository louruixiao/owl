import { OPrefabOptionsDefine } from '@owl/define';
import { ORowExpose, ORowPrefabDefine } from '@owl/define/grid-system-row';
import { computed, PropType } from 'vue';
import { BaseProps } from '../base-props';
import { withPrefab } from '../withPrefab';

const RowProps = {
	...BaseProps,
	/**
	 * 间距
	 * @prop
	 */
	gutter: {
		type: Number as PropType<number>,
		default: 5
	},
	/**
	 * 列总数
	 * @prop
	 */
	colCount: {
		type: Number as PropType<12 | 24>,
		default: 24
	}
} as const;

const withRow = (options: OPrefabOptionsDefine): ORowPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);
	const expose: ORowExpose = {};

	const obtainColCountClass = computed(() => {
		return !props.colCount || prefab.cType__ + '--' + props.colCount;
	});

	const obtainGutterClass = computed(() => {
		return !props.gutter || prefab.cType__ + '--gutter-' + props.gutter;
	});
	prefab.addClass([obtainColCountClass, obtainGutterClass]);

	return {
		...prefab,
		...expose
	};
};
export { withRow, RowProps };
