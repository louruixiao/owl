import { OButtonPrefabDefine, OButtonPrefabOptionsDefine, OPrefabDefine } from '@owl/types';
import { computed, onMounted, ref } from 'vue';
import { withPrefab } from '../withPrefab';

/**
 * button核心逻辑
 *
 * @param {OButtonPrefabOptionsDefine} options
 * @returns {OButtonPrefabDefine}
 */
export const withButton = (options: OButtonPrefabOptionsDefine): OButtonPrefabDefine => {
	const { props } = options;
	const prefab: OPrefabDefine = withPrefab(options);

	//尺寸样式
	const obtainSizeClass = computed(() => {
		return !props.size || prefab.cType__ + '--' + props.size;
	});

	const obtainShapeClass = computed(() => {
		return !props.shape || prefab.cType__ + '--' + props.shape;
	});

	const obtainColorAndModeClass = computed(() => {
		return !props.color || prefab.cType__ + '--' + props.color + (props.mode ? '--' + props.mode : '');
	});

	const obtainDisabledClass = computed(() => {
		return !props.disabled || prefab.cType__ + '--disabled';
	});

	prefab.addClass([obtainColorAndModeClass, obtainSizeClass, obtainShapeClass, obtainDisabledClass]);

	const rootRef = ref<HTMLButtonElement | null>(null);
	const obtainText = ref<string>();

	onMounted(() => {
		obtainText.value = rootRef.value?.innerText;
	});

	return {
		...prefab,
		rootRef,
		obtainText
	};
};
