import{_ as t,c as d,o as e,b as s}from"./app.f75c35c2.js";const w='{"title":"OIcon","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"coms/o-icon-api.md"}',o={},a=s('<h1 id="oicon" tabindex="-1">OIcon <a class="header-anchor" href="#oicon" aria-hidden="true">#</a></h1> <p>\u4F7F\u7528<code>fontawesome</code>\u4F5C\u4E3A\u56FE\u6807\u5E93\uFF0C\u9ED8\u8BA4\u96C6\u6210free\u56FE\u6807\u5E93\uFF0C\u5982\u679C\u9700pro\u56FE\u6807\u5E93\u8BF7\u67E5\u770B\u6307\u5357</p> <h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2> <div class="content-table-wrap"><div class="content-table props-table"><table><thead><tr><th><span>\u540D\u79F0</span></th> <th><span>\u63CF\u8FF0</span></th> <th><span>\u7C7B\u578B</span></th> <th><span>\u9ED8\u8BA4\u503C</span></th> <th><span>\u53EF\u9009\u503C</span></th></tr></thead> <tbody><tr><td><span style="color:#1867c0;"><strong>id</strong></span></td> <td>\u7EC4\u4EF6ID</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String</span></span></td> <td></td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>display</strong></span></td> <td>\u663E\u793A or \u9690\u85CF</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Boolean</span></span></td> <td>true</td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>icon</strong></span><sup class="required">\u5FC5\u586B</sup></td> <td>\u56FE\u7247\u540D\u79F0<a href="/owl/icons/all.html" title="\u6EDA\u52A8\u6761\u914D\u7F6E">\u56FE\u7247\u67E5\u8BE2</a></td> <td><span style="white-space:nowrap;"><span style="color:#690;">String, Array, Object</span></span></td> <td></td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>type</strong></span></td> <td><a href="/owl/guide/IconType.html#\u98CE\u683C">\u56FE\u7247\u98CE\u683C</a></td> <td><span style="white-space:nowrap;"><span style="color:#690;">String</span></span></td> <td>&#39;fas&#39;</td> <td><code>fas</code>\uFF1Asolid \u5B9E\u4F53 <br> <code>fal</code>\uFF1Alight \u6E05\u6DE1\u7684<br> <code>far</code>\uFF1Aregular \u5E38\u89C4\u7684<br> <code>fad</code>\uFF1Aduotone \u53CC\u8272\u8C03<br> <code>fat</code>\uFF1Athin \u7EC6\u7684<br> <code>fab</code>\uFF1Abrands \u54C1\u724C\u6807\u8BC6</td></tr> <tr><td><span style="color:#1867c0;"><strong>size</strong></span></td> <td>2xs \u5230 2xl \u7684 T \u6064\u5C3A\u5BF8\u7F29\u653E\u4EE5\u53CA\u4ECE 1x \u5230 10x \u7684\u6587\u5B57\u5C3A\u5BF8</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String</span></span></td> <td></td> <td><code>lg</code>, <code>xs</code>, <code>sm</code>,  <code>1x</code>, <code>2x</code>, <code>3x</code>, <code>4x</code>, <code>5x</code>, <code>6x</code>, <code>7x</code>, <code>8x</code>, <code>9x</code>, <code>10x</code></td></tr> <tr><td><span style="color:#1867c0;"><strong>fixed-width</strong></span></td> <td>\u5C06\u56FE\u6807\u8BBE\u7F6E\u4E3A\u4F7F\u7528\u56FA\u5B9A\u5BBD\u5EA6\u4F1A\u6709\u6240\u5E2E\u52A9\u3002</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Boolean</span></span></td> <td>false</td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>rotation</strong></span></td> <td>\u65CB\u8F6C 90 180 270\u8BFB</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Number</span></span></td> <td></td> <td><code>90</code> <code>180</code> <code>270</code></td></tr> <tr><td><span style="color:#1867c0;"><strong>flip</strong></span></td> <td>\u7FFB\u8F6C</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String</span></span></td> <td></td> <td><code>horizontal</code>, <code>vertical</code>, <code>both</code></td></tr> <tr><td><span style="color:#1867c0;"><strong>pull</strong></span></td> <td>right:\u5728\u6587\u5B57\u53F3\u4FA7\uFF0Cleft:\u5728\u6587\u5B57\u5DE6\u4FA7</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String</span></span></td> <td></td> <td><code>right</code>, <code>left</code></td></tr> <tr><td><span style="color:#1867c0;"><strong>border</strong></span></td> <td>\u8FB9\u6846</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Boolean</span></span></td> <td>false</td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>minor</strong></span></td> <td>\u5728\u56FE\u7247\u7EC4\u5408\u65F6\u6807\u6CE8\u6B21\u8981\u56FE\u6807\uFF0C\u989C\u8272\u4F1A\u56E0\u6B64\u7FFB\u8F6C</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Boolean</span></span></td> <td>false</td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate</strong></span></td> <td>\u52A8\u753B</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String, Array</span></span></td> <td></td> <td><code>beat</code>:\u5FC3\u8DF3,<code>fade</code>:\u6DE1\u5316,<code>beat-fade</code>:\u95EA\u70C1,<code>flip</code>:\u7FFB\u8F6C,<code>spin</code>:\u65CB\u8F6C,<code>spin-pulse</code>:\u8109\u51B2\u65CB\u8F6C,<code>spin-reverse</code>:\u53CD\u65B9\u5411\u65CB\u8F6C</td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate-options</strong></span></td> <td>\u52A8\u753B\u914D\u7F6E\u9009\u9879</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Object</span></span></td> <td></td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate-scale</strong></span></td> <td>\u5728<code>beat</code> \u548C <code>beat-fade</code> \u52A8\u753B\u4E2D\u8BBE\u7F6E\u56FE\u6807\u5C06\u7F29\u653E\u7684\u6700\u5927\u503C</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Number</span></span></td> <td></td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate-opacity</strong></span></td> <td>\u5728<code>fade</code> \u548C <code>beat-fade</code> \u52A8\u753B\u4E2D\u8BBE\u7F6E\u56FE\u6807\u5C06\u6DE1\u5165\u6DE1\u51FA\u7684\u6700\u4F4E\u4E0D\u900F\u660E\u5EA6\u503C</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Number</span></span></td> <td></td> <td></td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate-flip-axis</strong></span></td> <td>\u5728<code>flip</code>\u52A8\u753B\u4E2D\u8BBE\u7F6E\u65CB\u8F6C\u8F74</td> <td><span style="white-space:nowrap;"><span style="color:#690;">String, Array</span></span></td> <td></td> <td>&#39;x&#39; , &#39;y&#39; , &#39;z&#39;</td></tr> <tr><td><span style="color:#1867c0;"><strong>animiate-flip-angle</strong></span></td> <td>\u5728<code>flip</code>\u52A8\u753B\u4E2D\u8BBE\u7F6E\u65CB\u8F6C\u89D2\u5EA6</td> <td><span style="white-space:nowrap;"><span style="color:#690;">Number</span></span></td> <td></td> <td></td></tr></tbody></table></div></div>',7),n=[a];function r(c,p,l,i,y,h){return e(),d("div",null,n)}var f=t(o,[["render",r]]);export{w as __pageData,f as default};
