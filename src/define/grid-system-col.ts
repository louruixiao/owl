import { OComponentInstance, OPrefabDefine } from './base';

/**
 * OCol实例上暴露的属性或方法
 */
export type OColExpose = Record<string, unknown>;

/**
 * OCol 实例上私有的的属性或方法
 */
export type OColPrivate = Record<string, unknown>;

/**
 * OCol 逻辑组织函数返回定义
 */
export type OColPrefabDefine = OPrefabDefine & OColPrivate;

/**
 * OCol 对象实例
 */
export declare type OColInstance = OComponentInstance<OColExpose>;
