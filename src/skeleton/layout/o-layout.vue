<template>
	<div v-if="refresh__" v-show="display__" :id="id__" :class="class__">
		<!-- @slot -->
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { LayoutProps, withLayout } from '@owl/core/logic/logic-layout';
import { defineComponent } from 'vue';

/**
 * 通用布局组件，布局模式有
 * `form`：表单布局
 * `column-12`:12列布局
 * `column-24`:24列布局
 * ``
 */
export default defineComponent({
	name: 'OLayout',
	props: LayoutProps,
	setup(props, ctx) {
		return withLayout({ props, ctx });
	}
});
</script>

<style lang="scss" scoped>
@import '../../themes/styles/_layout.scss';
</style>
