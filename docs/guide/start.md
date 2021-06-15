---
pageClass: 'doc-component-layout'
sidebarDepth: 0
---

# GnDatePanel

日期选择面板

- **继承:**

## 属性

<div class="doc-table">

| 属性名  | 类型                   | 必须 | 描述                                                               | 默认值                              |
| ------- | ---------------------- | ---- | ------------------------------------------------------------------ | ----------------------------------- |
| id      | `String`               |      | 组件 ID，如果不进行设置会默认生成（生成规则【组件名称-组件序号】） |                                     |
| display | `Boolean`              |      | 显示隐藏                                                           | `true`                              |
| height  | `String`               |      | 高度                                                               |                                     |
| width   | `String`               |      | 宽度                                                               |                                     |
| v-model | `String` &#124; `Date` |      | 时间 可通过 :value.sync="datetime" 进行双向绑定，date 为变量       | `function() { return new Date(); }` |

</div>

## 实例方法

### prevYear()

<div class="method-body">

**说明：**

<br>

**语法：**

```js
prevYear(): void
```

<br>

<br>

</div>

### nextYear()

<div class="method-body">

**说明：**

<br>

**语法：**

```js
nextYear(): void
```

<br>

<br>

</div>

### prevMonth()

<div class="method-body">

**说明：**

<br>

**语法：**

```js
prevMonth(): void
```

<br>

<br>

</div>

### nextMonth()

<div class="method-body">

**说明：**

<br>

**语法：**

```js
nextMonth(): void
```

<br>

<br>

</div>
