<template>
	<div v-if="refresh__" v-show="display__" :id="id__" :class="class__">
		<!-- @slot -->
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { LayoutItemProps, withLayoutItem } from '@owl/core/logic/logic-layout-item';
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'OLayoutItem',
	props: LayoutItemProps,
	setup(props, ctx) {
		return withLayoutItem({ props, ctx });
	}
});
</script>

<style lang="scss" scoped>
@import '../../themes/styles/_layout-item.scss';
</style>
