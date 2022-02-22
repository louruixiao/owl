import { OComponentInstance } from '@owl/types/base-define';
import { UnwrapNestedRefs } from '@vue/reactivity';
import { difference, forEach, isArray, isObject, isString } from 'lodash-es';
import { getCurrentInstance, isRef, reactive, ref, Ref, watch } from 'vue';

type ClsType = undefined | string | Array<string | Ref> | Record<string, boolean> | Ref;

const transformCls = (cls: ClsType | Array<ClsType>): Array<string | Ref> | void => {
	const class_: Array<string | Ref | Ref> = [];
	if (isString(cls)) {
		if (!class_.includes(cls)) {
			class_.push(cls);
		}
	} else if (isRef(cls)) {
		class_.push(cls);
	} else if (isArray(cls)) {
		cls.forEach((c) => {
			if (isString(c)) {
				class_.push(c);
			} else {
				const nestedCls = transformCls(c);
				if (nestedCls) class_.push(...difference(nestedCls, class_));
			}
		});
	} else if (isObject(cls)) {
		const arr: Array<string> = [];
		forEach(cls, (flag, c) => {
			flag && arr.push(c);
		});
		class_.push(...difference(arr, class_));
	}
	return class_;
};

/**
 * 给组件添加类样式，必须在组件实例上或者setup中调用
 * 当在setup或生命周期函数中调用用是可以传入响应式的数据
 * @public
 * @method
 * @param cls {string | Array<string> | Record<string, boolean>} 样式表
 */
export const addClass = function (this: void | unknown, cls: ClsType | ClsType[]): void {
	const internalInstance = getCurrentInstance();

	let proxy: OComponentInstance;
	if (!internalInstance) {
		proxy = this as OComponentInstance;
	} else {
		proxy = <OComponentInstance>internalInstance.proxy;
	}

	if (!proxy) {
		return;
	}

	const class_ = transformCls(cls);
	if (!class_ || class_.length == 0) {
		return;
	}
	const refs: Array<Ref> = class_.filter((cls) => isRef(cls)) as Array<Ref>;

	const realClass: Array<string> = class_.filter((cls) => !isRef(cls)) as Array<string>;

	const classRef = ref<Array<string>>(realClass);
	if (!proxy.class__) {
		proxy.class__ = classRef.value;
	} else {
		proxy.class__.push(...difference(classRef.value, proxy.class__));
	}

	if (internalInstance) {
		watch(
			refs,
			(newCls, oldCls) => {
				if (proxy.class__) {
					if (oldCls && oldCls.length === 0 && newCls && newCls.length > 0) {
						proxy.class__.push(...difference(newCls, proxy.class__));
					} else {
						oldCls.forEach((oc) => {
							const index = proxy.class__?.indexOf(oc);
							if (index) {
								proxy.class__?.splice(index, 1, newCls[index - 1]);
							}
						});
					}
				}
			},
			{
				immediate: true
			}
		);
	}
};

export const cssVar = function (this: void | unknown, name: string, value: unknown, prefix = true): void {
	const instance = getCurrentInstance();
	let proxy: OComponentInstance;
	if (!instance) {
		proxy = this as OComponentInstance;
	} else {
		proxy = <OComponentInstance>instance.proxy;
	}

	if (!proxy) {
		return;
	}

	const key = prefix ? proxy.cType__ + '_' + name : name;

	if (proxy.cssVars__) {
		(<UnwrapNestedRefs<Record<string, unknown>>>proxy.cssVars__)[key] = value;
	} else {
		proxy.cssVars__ = reactive({
			[key]: value
		});
	}
};
