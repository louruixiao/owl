import { addClass, cssVar } from '@owl/utils/dom';
import { forEach } from 'lodash-es';
import { computed, getCurrentInstance, ref, useCssVars } from 'vue';
import { OPrefabDefine, OPrefabOptionsDefine } from '../define';

const transformName = (name: string): string => {
	const c = name.charAt(0);
	if (c > 'A' && c < 'Z') {
		name = c.toLowerCase() + name.substr(1);
	}
	return name.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/**
 * 预制函数
 * @param {OPrefabOptionsDefine} options
 * @returns
 */
export function withPrefab(options: OPrefabOptionsDefine): OPrefabDefine {
	const { props, cls } = options;
	//获取组件对象实例
	const instance = getCurrentInstance();

	if (!instance || !instance.type.name) {
		return {} as OPrefabDefine;
	}

	//生成组件主要样式类名
	const cType__ = transformName(instance.type.name);

	//生成组件ID
	const id__ = (props.id ?? instance.uid) as string;
	//显示状态
	const display__ = computed(() => {
		return (props.display as boolean) ?? true;
	});

	//类样式表
	addClass([cType__, cls]);

	// const cssVars__ = reactive(cssVars || {});
	// onMounted(() => {
	// 	proxy.cssVars__[proxy.cType__ + '_' + name] = value;
	// });
	useCssVars((_ctx) => {
		const vars: Record<string, string> = {};

		forEach(_ctx.cssVars__ || {}, (value, key) => {
			vars[cType__ + '_' + key] = value;
		});

		return vars;
	});

	/**
	 * 生成BEM 修饰符类名
	 * @param modifier 修饰符
	 * @returns
	 */
	const bemModifier__ = (modifier: string): string => cType__ + '--' + modifier;
	/**
	 * 生成BEM 元素类名
	 * @param element 元素
	 * @returns
	 */
	const bemElement__ = (element: string): string => cType__ + '__' + element;

	//刷新状态
	const refresh__ = ref(true);

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

	return {
		cType__,
		id__,
		display__,
		refresh__,
		bemModifier__,
		bemElement__,
		addClass,
		cssVar,
		domRefresh
	};
}
