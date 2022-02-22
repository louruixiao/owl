import { IconProps } from '@owl/core/props/props-icon';
import { ExtractPropTypes, Ref } from 'vue';
import { OComponentInstance, OPrefabExpose, OPrefabOptionsDefine, OPrefabPrivate } from './base-define';

/**
 * 动画配置项
 */
export interface AnimiateOptions {
	/**
	 * 设置动画的初始延迟
	 */
	delay?: number;
	/**
	 * [设置动画方向](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
	 */
	direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	/**
	 * 设置动画的持续时间
	 */
	duration?: number;
	/**
	 * 设置动画的迭代次数
	 */
	iterationCount?: number;
	/**
	 * [设置动画如何通过帧进行](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
	 */
	timingFunction?: string | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
}

export type OIconExpose = OPrefabExpose;

export type OIconPrivate = OPrefabPrivate & {
	obtainIcon: Ref<Array<string> | string | object>;
	obtainFlip: Ref<string | null>;
	obtainIsFlipAndRotation: Ref<boolean>;
};

export type OIconPropsDefine = Readonly<ExtractPropTypes<typeof IconProps>>;

export type OIconPrefabOptionsDefine = OPrefabOptionsDefine<OIconPropsDefine>;

export type OIconPrefabDefine = OIconExpose & OIconPrivate;

export type OIconInstance = Omit<OComponentInstance<OIconPropsDefine, OIconPrefabDefine>, keyof OIconPrivate>;
