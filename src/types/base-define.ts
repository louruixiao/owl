import { SetupContext } from '@vue/runtime-core';
import { ComponentPublicInstance, ComputedRef, Ref } from 'vue';

/**
 * 组件实例挂载预制，每个owl组件都可以this.来获取调用一下参数或方法
 */
export type OPrefabDefine = OPrefabExpose & OPrefabPrivate;

/**
 * 组件实例挂载预制，每个owl组件都可以this.来获取调用一下参数或方法
 */
export type OPrefabExpose = {
	addClass: (cls: string | Array<string | Ref> | Record<string, boolean> | Ref) => void;
	cssVar: (name: string, value: unknown, prefix?: boolean) => void;
	domRefresh: () => void;
};

/**
 * 组件实例挂载预制，每个owl组件都可以this.来获取调用一下参数或方法
 */
export type OPrefabPrivate = {
	cType__: string;
	id__: string;
	cssVars__?: Record<string, unknown>;
	class__?: Array<string>;
	display__: ComputedRef<boolean>;
	refresh__: Ref<boolean>;
	bemModifier__: (cls: string) => string;
	bemElement__: (cls: string) => string;
};

export interface OBasePropsDefine {
	id?: string;
	display?: boolean;
}

/**
 * 组件setup预制方法参数定义
 */
export type OPrefabOptionsDefine<P extends OBasePropsDefine = OBasePropsDefine> = {
	props: P;
	ctx: SetupContext;
};

/**
 * owl组件实例定义
 */
export type OComponentInstance<Props extends OBasePropsDefine = OBasePropsDefine, PrefabDefine extends OPrefabDefine = OPrefabDefine> = ComponentPublicInstance<
	Props,
	PrefabDefine
>;

export type OResponsive = {
	xs: number | string;
	sm: number | string;
	md: number | string;
	lg: number | string;
	xl: number | string;
	xxl: number | string;
};

export type OThemeSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type OThemeColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';

/**
 * 间距
 * h水平方向，v垂直方向
 */
export type OGutter = { h: number | string; v: number | string };
