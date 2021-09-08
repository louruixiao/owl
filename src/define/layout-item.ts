import { OComponentInstance, OPrefabDefine } from './base';

/**
 * OLayoutItem实例上暴露的属性或方法
 */
export type OLayoutItemExpose = Record<string, unknown>;

/**
 * OLayoutItem 实例上私有的的属性或方法
 */
export type OLayoutItemPrivate = Record<string, unknown>;

/**
 * OLayoutItem 逻辑组织函数返回定义
 */
export type OLayoutItemPrefabDefine = OPrefabDefine & OLayoutItemPrivate;

/**
 * OLayoutItem 对象实例
 */
export declare type OLayoutItemInstance = OComponentInstance<OLayoutItemExpose>;
