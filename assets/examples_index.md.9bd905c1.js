import{o as n,c as a,b as s}from"./app.af771645.js";const e='{"title":"安装","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"事件回调参数","slug":"事件回调参数"},{"level":3,"title":"ButtonEventArg","slug":"buttoneventarg"},{"level":3,"title":"FormItemEventArg","slug":"formitemeventarg"},{"level":2,"title":"数据双向绑定","slug":"数据双向绑定"},{"level":3,"title":"普通属性","slug":"普通属性"}],"relativePath":"examples/index.md","lastUpdated":1623778390938}',t={},o=s('<h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-sh"><pre><code># npm 安装\nnpm i --save gavin-ui-element\n# yarn 安装\nyarn add gavin-ui-element\n</code></pre></div><h2 id="事件回调参数"><a class="header-anchor" href="#事件回调参数" aria-hidden="true">#</a> 事件回调参数</h2><h3 id="buttoneventarg"><a class="header-anchor" href="#buttoneventarg" aria-hidden="true">#</a> <code>ButtonEventArg</code></h3><p>按钮事件返回参数类型</p><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ButtonEventArg</span> <span class="token punctuation">{</span>\n\tobj<span class="token operator">:</span> VueComponent<span class="token punctuation">;</span> <span class="token comment">//组件自身</span>\n\tid<span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">//组件ID</span>\n\tel<span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span> <span class="token comment">//组件节点对接</span>\n\tcType<span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">//组件类型,</span>\n\tdataset<span class="token operator">:</span> any<span class="token punctuation">;</span> <span class="token comment">//data-* 参数,</span>\n\tbutton<span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 鼠标按键</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="formitemeventarg"><a class="header-anchor" href="#formitemeventarg" aria-hidden="true">#</a> <code>FormItemEventArg</code></h3><p>表单项组件事件返回参数</p><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">FormItemEventArg</span><span class="token punctuation">{</span>\n    obj<span class="token operator">:</span>VueComponent<span class="token punctuation">,</span><span class="token comment">//组件自身</span>\n    id<span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token comment">//组件ID</span>\n    el<span class="token operator">:</span>HTMLElement<span class="token punctuation">,</span><span class="token comment">//组件节点对接</span>\n    cType<span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token comment">//组件类型,</span>\n\tdataset<span class="token operator">:</span>any<span class="token punctuation">,</span><span class="token comment">//data-* 参数,</span>\n\tevent<span class="token operator">:</span>Event<span class="token punctuation">,</span> <span class="token comment">//DOM 中出现的事件</span>\n\tvalue<span class="token operator">:</span>any<span class="token punctuation">,</span><span class="token comment">//真实值</span>\n\tdisValue<span class="token comment">//表现值</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="数据双向绑定"><a class="header-anchor" href="#数据双向绑定" aria-hidden="true">#</a> 数据双向绑定</h2><p>表单组件通过<code>v-model</code>进行数据双向绑定。</p><h3 id="普通属性"><a class="header-anchor" href="#普通属性" aria-hidden="true">#</a> 普通属性</h3><p>如果让组件属性与外部进行数据双向绑定，需要使用<code>sync</code>修饰符进行配置，配置到外部变量<code>:foo.sync=&quot;fooVal&quot;</code>，可以是外部对象中的属性<code>:foo.sync=&quot;fooVal.p1&quot;</code>。</p>',13);t.render=function(s,e,t,p,c,r){return n(),a("div",null,[o])};export default t;export{e as __pageData};
