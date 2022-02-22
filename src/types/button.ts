import { ButtonProps } from '@owl/core/props/props-button';
import { ExtractPropTypes, Ref } from 'vue';
import { OComponentInstance, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from './base-define';

export type OButtonExpose = OPrefabExpose;

export type OButtonPrivate = OPrefabPrivate & {
	rootRef: Ref<HTMLButtonElement | null>;
	obtainText: Ref<string | undefined>;
};

export type OButtonPrefabDefine = OButtonExpose & OButtonPrivate;

export type OButtonPropsDefine = Readonly<ExtractPropTypes<typeof ButtonProps>>;

export type OButtonPrefabOptionsDefine = OPrefabOptionsDefine<OButtonPropsDefine>;

export type OButtonInstance = Omit<OComponentInstance<OButtonPropsDefine, OButtonPrefabDefine>, keyof OButtonPrivate>;
