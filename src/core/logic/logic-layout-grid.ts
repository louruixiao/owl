import { OLayoutGridPrefabDefine, OLayoutGridPrefabOptionsDefine } from '@owl/types/layout-grid';
import { isString } from '@vue/shared';
import { isNumber, repeat, trim } from 'lodash-es';
import { computed } from 'vue';
import { OPrefabDefine } from '../../types/base-define';
import { withPrefab } from '../withPrefab';

/**
 * LayoutGrid核心逻辑
 *
 * @param {OLayoutGridPrefabOptionsDefine} options
 * @returns {OLayoutGridPrefabDefine}
 */
export const withLayoutGrid = (options: OLayoutGridPrefabOptionsDefine): OLayoutGridPrefabDefine => {
	const { props } = options;
	const prefab: OPrefabDefine = withPrefab(options);

	//设置列
	const columns = computed(() => {
		if (isNumber(props.columns)) {
			return trim(repeat('minmax(100px, 1fr) ', props.columns));
		} else if (isString(props.columns)) {
			return props.columns;
		} else return '';
	});

	prefab.cssVar('columns', columns);

	return {
		...prefab
	};
};
