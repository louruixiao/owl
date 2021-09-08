::: warning
框架集成了`fortawesome 6`，有由于图标库存在版权问题，owl不提供svg 图标库，用户可以自行安装svg图标库。安装pro版`fortawesome 6` 需要先[配置token](https://fontawesome.com/v6.0/docs/web/setup/packages#configure-access)，才能安装成功。
:::

去fortawesome官网搜索图标[搜索图标](https://fontawesome.com/v6.0/icons)

## 安装图标库

```shell
# 免费图标库
yarn add @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons
# pro 图标库
yarn add @fortawesome/pro-solid-svg-icons@next
yarn add @fortawesome/pro-regular-svg-icons@next
yarn add @fortawesome/pro-light-svg-icons@next
yarn add @fortawesome/pro-thin-svg-icons@next
yarn add @fortawesome/pro-duotone-svg-icons@next
```

## 使用

#### 入口文件引入

```js
// main.js 入口文件

// 引入svg图标库
import {faAlipay} from '@fortawesome/free-brands-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
//引入addIcon
import { addIcon } from '@yiird/owl';

//将图标添加到上下文中，可在入口js文件中处理，也可在组件中使用时添加。
addIcon(faAlipay,faCamera);
```

```jsx
// demo.vue
<template>
    <o-icon name="alipay"></o-icon>
    <o-icon name="camera"></o-icon>
</template>

```

#### 在使用图标的组件中直接引入

```jsx
// demo.vue
<template>
    <demo>
        <o-icon name="alipay"></o-icon>
        <o-icon name="camera"></o-icon>
    </demo>
</template>

<script lang="ts">
// 引入svg图标库
import {faAlipay} from '@fortawesome/free-brands-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
//引入addIcon
import { addIcon } from '@yiird/owl';

//将图标添加到上下文中，可在入口js文件中处理，也可在组件中使用时添加。
addIcon(faAlipay,faCamera);
export default {
    ...
}
</script>
```

## 风格

官方提供六种风格图标: 引入相应风格的图标库后，通过 `o-icon` 组件的 props属性 type 来指定风格。

- `fas` solid 实体 (free、pro)
- `fal` light 清淡的(pro)
- `far` regular 常规的(pro)
- `fad` duotone 双色调(pro)
- `fat` thin 细的(pro)
- `fab` brands 品牌标识(free)

::: warning
当同一个图标需要多种风格展示时需要给每个风格取个别名，在addIcon到上下文中。
例如：
```jsx
import {faHeart as heart1} from '@fortawesome/free-solid-svg-icons';
import {faHeart as heart2} from '@fortawesome/pro-light-svg-icons';

addIcon(heart1,heart2)
使用时在`o-icon` name 上使用真实的名称去掉`fa`,使用 type 来指定风格

<o-icon name="heart" type="fas"></o-icon>
```
:::