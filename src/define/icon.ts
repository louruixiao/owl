import { Ref } from 'vue';
import { OComponentInstance, OPrefabDefine } from './base';

/**
 * OIcon实例上暴露的属性或方法
 */
export type OIconExpose = Record<string, unknown>;

/**
 * OIcon 实例上私有的的属性或方法
 */
export type OIconPrivate = { obtainIcon: Ref<Array<string>> };

/**
 * OIcon 逻辑组织函数返回定义
 */
export type OIconPrefabDefine = OPrefabDefine & OIconPrivate;

/**
 * OIcon 对象实例
 */
export declare type OIconInstance = OComponentInstance<OIconExpose>;
