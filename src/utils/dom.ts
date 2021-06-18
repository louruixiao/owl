import { OwlComponentInstance } from '@owl/core/types';
import { forEach, isArray, isObject, isString, difference } from 'lodash';
import { ComponentInternalInstance, ComponentPublicInstance, getCurrentInstance, reactive } from 'vue';

type ClsType = undefined | string | Array<string> | Record<string, boolean>;

const transformCls = (cls: ClsType | Array<ClsType>): string[] | void => {
	const class_: string[] = [];
	if (isString(cls)) {
		if (!class_.includes(cls)) {
			class_.push(cls);
		}
	} else if (isArray(cls)) {
		cls.forEach((c) => {
			if (isString(c)) {
				class_.push(c);
			} else {
				const nestedCls = addClass(c);
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
 * 给组件添加类样式
 * @public
 * @method
 * @param cls {string | Array<string> | Record<string, boolean>} 样式表
 */
export const addClass = function (this: void | unknown, cls: ClsType | ClsType[]): string[] | void {
	const instance = getCurrentInstance();
	let proxy: OwlComponentInstance;
	if (!instance) {
		const _this = this;
		proxy = _this as OwlComponentInstance;
	} else {
		proxy = <OwlComponentInstance>instance.proxy;
	}

	if (!proxy) {
		return;
	}

	const class_ = transformCls(cls);
	if (!class_) {
		return;
	}
	if (proxy.class__) {
		proxy.class__.push(...difference(class_, proxy.class__));
	} else {
		proxy.class__ = reactive(class_);
	}

	return class_;
};
