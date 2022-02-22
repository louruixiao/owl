import { LayoutGridProps } from '@owl/core/props/props-layout-grid';
import { ExtractPropTypes } from 'vue';
import { OComponentInstance, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from './base-define';

export type OLayoutGridExpose = OPrefabExpose;

export type OLayoutGridPrivate = OPrefabPrivate;

export type OLayoutGridPrefabDefine = OLayoutGridExpose & OLayoutGridPrivate;

export type OLayoutGridPropsDefine = Readonly<ExtractPropTypes<typeof LayoutGridProps>>;

export type OLayoutGridPrefabOptionsDefine = OPrefabOptionsDefine<OLayoutGridPropsDefine>;

export type OLayoutGridInstance = Omit<OComponentInstance<OLayoutGridPropsDefine, OLayoutGridPrefabDefine>, keyof OLayoutGridPrivate>;
