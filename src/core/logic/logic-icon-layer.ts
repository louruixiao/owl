import { ExtractPropTypes } from 'vue';
import { OComponentInstance, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from '../../types/base-define';
import { BaseProps } from '../props/base-props';
import { withPrefab } from '../withPrefab';

const IconLayerProps = {
	...BaseProps
} as const;

type OIconLayerExpose = OPrefabExpose;

type OIconLayerPrivate = OPrefabPrivate;

type OIconLayerPrefabDefine = OIconLayerExpose & OIconLayerPrivate;

type OIconLayerPropsDefine = Readonly<ExtractPropTypes<typeof IconLayerProps>>;

type OIconLayerPrefabOptionsDefine = OPrefabOptionsDefine<OIconLayerPropsDefine>;

type OIconLayerInstance = Omit<OComponentInstance<OIconLayerPropsDefine, OIconLayerPrefabDefine>, keyof OIconLayerPrivate>;

/**
 * IconLayer核心逻辑
 *
 * @param {OIconLayerPrefabOptionsDefine} options
 * @returns {OIconLayerPrefabDefine}
 */
const withIconLayer = (options: OIconLayerPrefabOptionsDefine): OIconLayerPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);

	return {
		...prefab
	};
};

export { withIconLayer, IconLayerProps, OIconLayerInstance };
