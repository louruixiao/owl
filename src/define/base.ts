import { SetupContext } from '@vue/runtime-core';
import { ComponentPublicInstance, ComputedRef, Ref } from 'vue';

/**
 * 组件实例挂载预制，每个owl组件都可以this.来获取调用一下参数或方法
 */
export type OPrefabDefine = {
	cType__: string;
	id__: string;
	class__?: Array<string>;
	display__: ComputedRef<boolean>;
	refresh__: Ref<boolean>;
	bemModifier__: (cls: string) => string;
	bemElement__: (cls: string) => string;
	addClass: (cls: string | Array<string | ComputedRef> | Record<string, boolean> | ComputedRef) => void;
	cssVar: (name: string, value: unknown) => void;
	domRefresh: () => void;
};

/**
 * 组件setup预制方法参数定义
 */
export type OPrefabOptionsDefine = {
	props: Readonly<Record<string, unknown>>;
	cls?: string | Array<string> | Record<string, boolean>;
	ctx?: SetupContext;
};

/**
 * owl组件实例定义
 */
export type OComponentInstance<T = Record<string, unknown>> = ComponentPublicInstance<Record<string, unknown>, OPrefabDefine & T>;

export type OResponsive = {
	xs: number | string;
	sm: number | string;
	md: number | string;
	lg: number | string;
	xl: number | string;
	xxl: number | string;
};

/**
 * 间距
 * h水平方向，v垂直方向
 */
export type OGutter = {
	h: number | string;
	v: number | string;
};
