import { ComponentPublicInstance, ComputedRef, Ref, SetupContext } from 'vue';

export type PrefabDefine = {
	cType__: string;
	id__: string;
	class__?: Array<string | Ref<string>>;
	display__: ComputedRef;
	refresh__: Ref<boolean>;
	style__?: Record<string, string | number>;
	addClass: (cls: string | Array<string> | Record<string, boolean>) => void;
	domRefresh: () => void;
	putCssVar__: (cssName: string, value: string | number) => void;
	cssModifier__: (cls: string | undefined) => string | undefined;
	cssElement__: (cls: string | undefined) => string | undefined;
};

export type OwlComponentInstance<T = {}> = ComponentPublicInstance<{}, PrefabDefine & T>;

export type OwlWithOptions = {
	props: Record<string, unknown>;
	cls?: string | Array<string> | Record<string, boolean>;
	cssVars?: Record<string, string | number>;
	ctx?: SetupContext;
};

export type ButtonExpose = { abc: string };

export type OButtonInstance = OwlComponentInstance<ButtonExpose>;
