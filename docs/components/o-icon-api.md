---
sidebarDepth: 2
---

# OIcon

使用`fontawesome`作为图标库，默认集成free图标库，如果需pro图标库请查看指南 




## 属性

<div class="content-table-wrap">
<div class="content-table props-table">

| <span>名称</span>                                                             |<span>描述</span>                                                  |<span>类型</span>                                                                               |<span>默认值</span> |<span>可选值</span>                                                                                                                         |
| ----------------------------------------------------------------------------- |------------------------------------------------------------------ |----------------------------------------------------------------------------------------------- |------- |------------------------------------------------------------------------------------------------------------------------------------------  |
| <span style="color:#1867c0">**id**</span>                                     |组件ID                                                             |<span style="white-space:nowrap"><span style="color:#690">String</span></span>                  |        |                                                                                                                                            |
| <span style="color:#1867c0">**display**</span>                                |显示 or 隐藏                                                       |<span style="white-space:nowrap"><span style="color:#690">Boolean</span></span>                 |true    |                                                                                                                                            |
| <span style="color:#1867c0">**icon**</span><sup class="required">必填</sup>   |图片名称[图片查询](/icons/all.html "滚动条配置")                   |<span style="white-space:nowrap"><span style="color:#690">String, Array, Object</span></span>   |        |                                                                                                                                            |
| <span style="color:#1867c0">**type**</span>                                   |[图片风格](/owl/guide/IconType.html#风格)                          |<span style="white-space:nowrap"><span style="color:#690">String</span></span>                  |'fas'   |`fas`：solid 实体 <br> `fal`：light 清淡的<br> `far`：regular 常规的<br> `fad`：duotone 双色调<br> `fat`：thin 细的<br> `fab`：brands 品牌标识    |
| <span style="color:#1867c0">**size**</span>                                   |2xs 到 2xl 的 T 恤尺寸缩放以及从 1x 到 10x 的文字尺寸              |<span style="white-space:nowrap"><span style="color:#690">String</span></span>                  |        |`lg`, `xs`, `sm`,  `1x`, `2x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`                                                              |
| <span style="color:#1867c0">**fixed-width**</span>                            |将图标设置为使用固定宽度会有所帮助。                                |<span style="white-space:nowrap"><span style="color:#690">Boolean</span></span>                 |false   |                                                                                                                                            |
| <span style="color:#1867c0">**rotation**</span>                               |旋转 90 180 270读                                                  |<span style="white-space:nowrap"><span style="color:#690">Number</span></span>                  |        |`90` `180` `270`                                                                                                                            |
| <span style="color:#1867c0">**flip**</span>                                   |翻转                                                               |<span style="white-space:nowrap"><span style="color:#690">String</span></span>                  |        |`horizontal`, `vertical`, `both`                                                                                                            |
| <span style="color:#1867c0">**pull**</span>                                   |right:在文字右侧，left:在文字左侧                                   |<span style="white-space:nowrap"><span style="color:#690">String</span></span>                  |        |`right`, `left`                                                                                                                             |
| <span style="color:#1867c0">**border**</span>                                 |边框                                                               |<span style="white-space:nowrap"><span style="color:#690">Boolean</span></span>                 |false   |                                                                                                                                            |
| <span style="color:#1867c0">**minor**</span>                                  |在图片组合时标注次要图标，颜色会因此翻转                            |<span style="white-space:nowrap"><span style="color:#690">Boolean</span></span>                 |false   |                                                                                                                                            |
| <span style="color:#1867c0">**animiate**</span>                               |动画                                                               |<span style="white-space:nowrap"><span style="color:#690">String, Array</span></span>           |        |`beat`:心跳,`fade`:淡化,`beat-fade`:闪烁,`flip`:翻转,`spin`:旋转,`spin-pulse`:脉冲旋转,`spin-reverse`:反方向旋转                            |
| <span style="color:#1867c0">**animiate-options**</span>                       |动画配置选项                                                       |<span style="white-space:nowrap"><span style="color:#690">Object</span></span>                  |        |                                                                                                                                            |
| <span style="color:#1867c0">**animiate-scale**</span>                         |在`beat` 和 `beat-fade` 动画中设置图标将缩放的最大值               |<span style="white-space:nowrap"><span style="color:#690">Number</span></span>                  |        |                                                                                                                                            |
| <span style="color:#1867c0">**animiate-opacity**</span>                       |在`fade` 和 `beat-fade` 动画中设置图标将淡入淡出的最低不透明度值   |<span style="white-space:nowrap"><span style="color:#690">Number</span></span>                  |        |                                                                                                                                            |
| <span style="color:#1867c0">**animiate-flip-axis**</span>                     |在`flip`动画中设置旋转轴                                           |<span style="white-space:nowrap"><span style="color:#690">String, Array</span></span>           |        |'x' , 'y' , 'z'                                                                                                                             |
| <span style="color:#1867c0">**animiate-flip-angle**</span>                    |在`flip`动画中设置旋转角度                                         |<span style="white-space:nowrap"><span style="color:#690">Number</span></span>                  |        |                                                                                                                                            |

</div>
</div>




