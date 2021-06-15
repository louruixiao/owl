import{o as t,c as d,b as e}from"./app.af771645.js";const o='{"title":"GnButton","description":"","frontmatter":{"pageClass":"doc-component-layout","sidebarDepth":0},"headers":[{"level":2,"title":"插槽","slug":"插槽"},{"level":2,"title":"属性","slug":"属性"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"examples/button.md","lastUpdated":1623778390938}',r={},c=e('<h1 id="gnbutton"><a class="header-anchor" href="#gnbutton" aria-hidden="true">#</a> GnButton</h1><p>有 7 中大小、5 中状态颜色、3 中模式可选</p><ul><li><strong>继承:</strong></li></ul><h2 id="插槽"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><div class="doc-table"><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td> </td></tr></tbody></table></div><h2 id="属性"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><div class="doc-table"><table><thead><tr><th>属性名</th><th>类型</th><th>必须</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td><code>String</code></td><td></td><td>组件 ID，如果不进行设置会默认生成（生成规则【组件名称-组件序号】）</td><td></td></tr><tr><td>display</td><td><code>Boolean</code></td><td></td><td>显示隐藏</td><td><code>true</code></td></tr><tr><td>size</td><td><code>String</code></td><td></td><td>尺寸 可选参数(<code>xxs</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>xxl</code>)</td><td><code>&quot;md&quot;</code></td></tr><tr><td>color</td><td><code>String</code></td><td></td><td>颜色 可选参数(<code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code>)</td><td><code>&quot;default&quot;</code></td></tr><tr><td>icon</td><td><code>String</code></td><td></td><td>图标名称</td><td></td></tr><tr><td>icon-type</td><td><code>String</code></td><td></td><td>图标风格 可选参数(<code>fal</code>,<code>fab</code>,<code>fas</code>,<code>far</code>)</td><td><code>&quot;fal&quot;</code></td></tr><tr><td>shape</td><td><code>String</code></td><td></td><td>形状可选 可选参数(<code>circle</code> 圆形, <code>square</code> 正方形, <code>ellipse</code> 椭圆形)</td><td></td></tr><tr><td>disabled</td><td><code>Boolean</code></td><td></td><td>是否禁用按钮</td><td><code>false</code></td></tr><tr><td>mode</td><td><code>String</code></td><td></td><td><code>light</code> <code>empty</code> <code>link</code></td><td> </td></tr></tbody></table></div><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><div class="doc-table"><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td>点击事件<br><strong>回调参数</strong><br><ul><li><strong>arg: <code>ButtonEventArg</code></strong></li></ul></td></tr><tr><td>mousedown</td><td>鼠标按钮按下<br><strong>回调参数</strong><br><ul><li><strong>arg: <code>ButtonEventArg</code></strong></li></ul></td></tr><tr><td>mouseup</td><td>鼠标按钮抬起<br><strong>回调参数</strong><br><ul><li><strong>arg: <code>ButtonEventArg</code></strong></li></ul></td></tr></tbody></table></div>',9);r.render=function(e,o,r,a,l,n){return t(),d("div",null,[c])};export default r;export{o as __pageData};