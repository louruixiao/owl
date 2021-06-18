import { forEach } from 'lodash';
import { computed, getCurrentInstance, reactive, ref } from 'vue';
import { OwlWithOptions, PrefabDefine } from '@owl/core/types';
import { addClass } from '@owl/utils/dom';

const transformName = (name: string): string => {
	const c = name.charAt(0);
	if (c > 'A' && c < 'Z') {
		name = c.toLowerCase() + name.substr(1);
	}
	return name.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/**
 * 预制函数
 * @param {OwlWithOptions} options
 * @returns
 */
export function withPrefab<T extends {}>(options: OwlWithOptions): Partial<T & PrefabDefine> {
	const { props, cls, cssVars } = options;
	//获取组件对象实例
	const instance = getCurrentInstance();
	if (!instance || !instance.type.name) {
		return {} as T;
	}

	//生成组件主要样式类名
	const cType__ = transformName(instance.type.name);

	//生成组件ID
	const id__ = props.id || instance.uid;
	//显示状态
	const display__ = computed(() => {
		return props.display ?? true;
	});

	//类样式表
	addClass([cType__, cls]);
	//刷新状态
	const refresh__ = ref(true);
	//样式表 包括 css var
	const style__ = reactive<Record<string, string | number>>({});

	/**
	 * 刷新组件
	 * @public
	 * @method
	 */
	const domRefresh = () => {
		refresh__.value = false;
		const timer = setTimeout(() => {
			refresh__.value = true;
			clearTimeout(timer);
		}, 200);
	};

	/**
	 * 添加 css var() 变量
	 * @method
	 * @private
	 * @param cssName 样式名
	 * @param value 样式值
	 */
	const putCssVar__ = (cssName: string, value: string | number): void => {
		style__[`--${cType__}-${cssName}`] = value;
	};

	const cssModifier__ = (cls: string | undefined): string | undefined => {
		if (cls !== undefined) {
			return cType__ + '--' + cls;
		}
	};
	const cssElement__ = (cls: string | undefined): string | undefined => {
		if (cls !== undefined) {
			return cType__ + '__' + cls;
		}
	};

	if (cssVars) {
		forEach(cssVars, (value: string | number, cssName: string) => {
			putCssVar__(cssName, value);
		});
	}
	return {
		cType__,
		id__,
		display__,
		refresh__,
		style__,
		addClass,
		domRefresh,
		putCssVar__,
		cssModifier__,
		cssElement__
	} as Partial<T & PrefabDefine>;
}
