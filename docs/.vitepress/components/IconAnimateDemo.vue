<template>
	<!-- 动画种类  -->
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="beat"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="fade"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="beat-fade"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="flip"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="spin"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" :animiate="['spin', 'spin-reverse']"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" animiate="spin-pulse"></o-icon></span>
	<span class="icon-item"><o-icon icon="heart" size="3x" :animiate="['spin-pulse', 'spin-reverse']"></o-icon></span>
	<br />
	<br />
	<!-- 动画选项配置 scale  -->
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="beat" :animiate-scale="2"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="beat-fade" :animiate-scale="1.2"></o-icon></span>
	<br />
	<br />
	<!-- 动画选项配置 opacity  -->
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="fade" :animiate-opacity="0.1"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="beat-fade" :animiate-opacity="0.1"></o-icon></span>
	<br />
	<br />
	<!-- 动画选项配置 flip-axis -->
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" animiate-flip-axis="x"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" animiate-flip-axis="z"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" :animiate-flip-axis="['x', 'y']"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" :animiate-flip-axis="['x', 'y', 'z']"></o-icon></span>
	<br />
	<br />
	<!-- 动画选项配置 flip-axis -->
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" animiate-flip-axis="x" :animiate-flip-angle="45"></o-icon></span>
	<span class="icon-item"><o-icon icon="camera" size="3x" animiate="flip" animiate-flip-axis="x" :animiate-flip-angle="60"></o-icon></span>
</template>
<script lang="ts">
import { faCamera, faHeart } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent } from 'vue';
addIcon(faCamera, faHeart);
export default defineComponent({
	name: 'IconAnimateDemo'
});
</script>
<style scoped>
.icon-item {
	display: inline-block;
	width: 50px;
}
</style>
