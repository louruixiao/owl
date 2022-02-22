import { ExtractPropTypes } from 'vue';
import { OComponentInstance, OPrefabDefine, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from '../../types/base-define';
import { FormItemProps } from '../props/base-props';
import { withPrefab } from '../withPrefab';

const InputProps = {
	...FormItemProps
} as const;

type OInputExpose = OPrefabExpose;

type OInputPrivate = OPrefabPrivate;

type OInputPrefabDefine = OInputExpose & OInputPrivate;

type OInputPropsDefine = Readonly<ExtractPropTypes<typeof InputProps>>;

type OInputPrefabOptionsDefine = OPrefabOptionsDefine<OInputPropsDefine>;

type OInputInstance = Omit<OComponentInstance<OInputPropsDefine, OInputPrefabDefine>, keyof OInputPrivate>;

/**
 * Input核心逻辑
 *
 * @param {OInputPrefabOptionsDefine} options
 * @returns {OInputPrefabDefine}
 */
const withInput = (options: OInputPrefabOptionsDefine): OInputPrefabDefine => {
	const { props } = options;
	const prefab: OPrefabDefine = withPrefab(options);

	return {
		...prefab
	};
};

export { withInput, InputProps, OInputPropsDefine, OInputInstance };
