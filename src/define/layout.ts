import { OComponentInstance, OPrefabDefine } from './base';

/**
 * OLayout实例上暴露的属性或方法
 */
export type OLayoutExpose = Record<string, unknown>;

/**
 * OLayout 实例上私有的的属性或方法
 */
export type OLayoutPrivate = Record<string, unknown>;

/**
 * OLayout 逻辑组织函数返回定义
 */
export type OLayoutPrefabDefine = OPrefabDefine & OLayoutPrivate;

/**
 * OLayout 对象实例
 */
export type OLayoutInstance = OComponentInstance<OLayoutExpose>;
