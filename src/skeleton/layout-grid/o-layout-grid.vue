<template>
	<div v-if="refresh__" v-show="display__" :id="id__" :class="class__" v-bind="$attrs">
		<!-- @slot -->
		<slot />
	</div>
</template>
<script lang="ts">
import { withLayoutGrid } from '@owl/core/logic/logic-layout-grid';
import { LayoutGridProps } from '@owl/core/props/props-layout-grid';
import { defineComponent } from 'vue';

/**
 * 按钮组件
 */
export default defineComponent({
	name: 'OLayoutGrid',
	props: LayoutGridProps,
	setup(props, ctx) {
		return withLayoutGrid({
			props,
			ctx
		});
	}
});
</script>

<style lang="scss" scoped>
@import '../../themes/styles/_layout-grid.scss';
</style>
