import { OComponentInstance, OPrefabDefine } from './base';

/**
 * Button实例上暴露的属性或方法
 */
export type OButtonExpose = Record<string, unknown>;

/**
 * OButton 实例上私有属性或方法
 */
export type OButtonPrivate = Record<string, unknown>;

/**
 * OButton 逻辑组织函数返回定义
 */
export type OButtonPrefabDefine = OPrefabDefine & OButtonPrivate;

/**
 * OButton 对象实例
 */
export declare type OButtonInstance = OComponentInstance<OButtonExpose>;
