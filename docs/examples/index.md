---
sidebarDepth: 2
---

## 安装

```sh
# npm 安装
npm i --save gavin-ui-element
# yarn 安装
yarn add gavin-ui-element
```

## 事件回调参数

### `ButtonEventArg`

按钮事件返回参数类型

```js
interface ButtonEventArg {
	obj: VueComponent; //组件自身
	id: string; //组件ID
	el: HTMLElement; //组件节点对接
	cType: string; //组件类型,
	dataset: any; //data-* 参数,
	button: string; // 鼠标按键
}
```

### `FormItemEventArg`

表单项组件事件返回参数

```js
interface FormItemEventArg{
    obj:VueComponent,//组件自身
    id:string,//组件ID
    el:HTMLElement,//组件节点对接
    cType:string,//组件类型,
	dataset:any,//data-* 参数,
	event:Event, //DOM 中出现的事件
	value:any,//真实值
	disValue//表现值
}
```

## 数据双向绑定

表单组件通过`v-model`进行数据双向绑定。

### 普通属性

如果让组件属性与外部进行数据双向绑定，需要使用`sync`修饰符进行配置，配置到外部变量`:foo.sync="fooVal"`，可以是外部对象中的属性`:foo.sync="fooVal.p1"`。
