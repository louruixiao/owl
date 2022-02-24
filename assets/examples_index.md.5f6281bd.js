import{_ as n,c as a,o as s,b as e}from"./app.f75c35c2.js";const h='{"title":"\u5B89\u88C5","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570","slug":"\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"ButtonEventArg","slug":"buttoneventarg"},{"level":3,"title":"FormItemEventArg","slug":"formitemeventarg"},{"level":2,"title":"\u6570\u636E\u53CC\u5411\u7ED1\u5B9A","slug":"\u6570\u636E\u53CC\u5411\u7ED1\u5B9A"},{"level":3,"title":"\u666E\u901A\u5C5E\u6027","slug":"\u666E\u901A\u5C5E\u6027"}],"relativePath":"examples/index.md"}',t={},p=e(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2> <div class="language-shell"><pre><code><span class="token comment"># npm \u5B89\u88C5</span>
<span class="token function">npm</span> i --save gavin-ui-element
<span class="token comment"># yarn \u5B89\u88C5</span>
<span class="token function">yarn</span> <span class="token function">add</span> gavin-ui-element
</code></pre></div><h2 id="\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570" tabindex="-1">\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570 <a class="header-anchor" href="#\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570" aria-hidden="true">#</a></h2> <h3 id="buttoneventarg" tabindex="-1"><code>ButtonEventArg</code> <a class="header-anchor" href="#buttoneventarg" aria-hidden="true">#</a></h3> <p>\u6309\u94AE\u4E8B\u4EF6\u8FD4\u56DE\u53C2\u6570\u7C7B\u578B</p> <div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ButtonEventArg</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">obj</span><span class="token operator">:</span> VueComponent<span class="token punctuation">;</span> <span class="token comment">//\u7EC4\u4EF6\u81EA\u8EAB</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">//\u7EC4\u4EF6ID</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span> <span class="token comment">//\u7EC4\u4EF6\u8282\u70B9\u5BF9\u63A5</span>
	<span class="token literal-property property">cType</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">//\u7EC4\u4EF6\u7C7B\u578B,</span>
	<span class="token literal-property property">dataset</span><span class="token operator">:</span> any<span class="token punctuation">;</span> <span class="token comment">//data-* \u53C2\u6570,</span>
	<span class="token literal-property property">button</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// \u9F20\u6807\u6309\u952E</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="formitemeventarg" tabindex="-1"><code>FormItemEventArg</code> <a class="header-anchor" href="#formitemeventarg" aria-hidden="true">#</a></h3> <p>\u8868\u5355\u9879\u7EC4\u4EF6\u4E8B\u4EF6\u8FD4\u56DE\u53C2\u6570</p> <div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">FormItemEventArg</span><span class="token punctuation">{</span>
    <span class="token literal-property property">obj</span><span class="token operator">:</span>VueComponent<span class="token punctuation">,</span><span class="token comment">//\u7EC4\u4EF6\u81EA\u8EAB</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token comment">//\u7EC4\u4EF6ID</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span>HTMLElement<span class="token punctuation">,</span><span class="token comment">//\u7EC4\u4EF6\u8282\u70B9\u5BF9\u63A5</span>
    <span class="token literal-property property">cType</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token comment">//\u7EC4\u4EF6\u7C7B\u578B,</span>
	<span class="token literal-property property">dataset</span><span class="token operator">:</span>any<span class="token punctuation">,</span><span class="token comment">//data-* \u53C2\u6570,</span>
	<span class="token literal-property property">event</span><span class="token operator">:</span>Event<span class="token punctuation">,</span> <span class="token comment">//DOM \u4E2D\u51FA\u73B0\u7684\u4E8B\u4EF6</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span>any<span class="token punctuation">,</span><span class="token comment">//\u771F\u5B9E\u503C</span>
	disValue<span class="token comment">//\u8868\u73B0\u503C</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6570\u636E\u53CC\u5411\u7ED1\u5B9A" tabindex="-1">\u6570\u636E\u53CC\u5411\u7ED1\u5B9A <a class="header-anchor" href="#\u6570\u636E\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a></h2> <p>\u8868\u5355\u7EC4\u4EF6\u901A\u8FC7<code>v-model</code>\u8FDB\u884C\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u3002</p> <h3 id="\u666E\u901A\u5C5E\u6027" tabindex="-1">\u666E\u901A\u5C5E\u6027 <a class="header-anchor" href="#\u666E\u901A\u5C5E\u6027" aria-hidden="true">#</a></h3> <p>\u5982\u679C\u8BA9\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u5916\u90E8\u8FDB\u884C\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF0C\u9700\u8981\u4F7F\u7528<code>sync</code>\u4FEE\u9970\u7B26\u8FDB\u884C\u914D\u7F6E\uFF0C\u914D\u7F6E\u5230\u5916\u90E8\u53D8\u91CF<code>:foo.sync=&quot;fooVal&quot;</code>\uFF0C\u53EF\u4EE5\u662F\u5916\u90E8\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027<code>:foo.sync=&quot;fooVal.p1&quot;</code>\u3002</p>`,22),o=[p];function r(c,l,i,d,u,k){return s(),a("div",null,o)}var y=n(t,[["render",r]]);export{h as __pageData,y as default};
