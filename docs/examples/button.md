---
pageClass: 'doc-component-layout'
sidebarDepth: 0
---

# GnButton

有 7 中大小、5 中状态颜色、3 中模式可选

- **继承:**
  - [extend-base.js](extend-base.md)

## 插槽

<div class="doc-table">

| 插槽名  | 说明   |
| ------- | ------ |
| default | &nbsp; |

</div>

## 属性

<div class="doc-table">

| 属性名    | 类型      | 必须 | 描述                                                                | 默认值      |
| --------- | --------- | ---- | ------------------------------------------------------------------- | ----------- |
| id        | `String`  |      | 组件 ID，如果不进行设置会默认生成（生成规则【组件名称-组件序号】）  |             |
| display   | `Boolean` |      | 显示隐藏                                                            | `true`      |
| size      | `String`  |      | 尺寸 可选参数(`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`)           | `"md"`      |
| color     | `String`  |      | 颜色 可选参数(`default`, `primary`, `success`, `warning`, `danger`) | `"default"` |
| icon      | `String`  |      | 图标名称                                                            |             |
| icon-type | `String`  |      | 图标风格 可选参数(`fal`,`fab`,`fas`,`far`)                          | `"fal"`     |
| shape     | `String`  |      | 形状可选 可选参数(`circle` 圆形, `square` 正方形, `ellipse` 椭圆形) |             |
| disabled  | `Boolean` |      | 是否禁用按钮                                                        | `false`     |
| mode      | `String`  |      | `light` `empty` `link`                                              | &nbsp;      |

</div>

## 事件

<div class="doc-table">

| 事件名    | 说明                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| click     | 点击事件<br>**回调参数**<br><ul><li>**arg: `ButtonEventArg`** — [回调参数](/guide/EventCallArgs.html#buttoneventarg)</li></ul>     |
| mousedown | 鼠标按钮按下<br>**回调参数**<br><ul><li>**arg: `ButtonEventArg`** — [回调参数](/guide/EventCallArgs.html#buttoneventarg)</li></ul> |
| mouseup   | 鼠标按钮抬起<br>**回调参数**<br><ul><li>**arg: `ButtonEventArg`** — [回调参数](/guide/EventCallArgs.html#buttoneventarg)</li></ul> |

</div>
