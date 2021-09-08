import { OComponentInstance, OPrefabDefine } from './base';

/**
 * ORow实例上暴露的属性或方法
 */
export type ORowExpose = Record<string, unknown>;

/**
 * ORow 实例上私有的的属性或方法
 */
export type ORowPrivate = Record<string, unknown>;

/**
 * ORow 逻辑组织函数返回定义
 */
export type ORowPrefabDefine = OPrefabDefine & ORowPrivate;

/**
 * ORow 对象实例
 */
export declare type ORowInstance = OComponentInstance<ORowExpose>;
