<template>
	<button v-if="refresh__" v-show="display__" :id="id__" :class="class__" v-bind="$attrs">
		<!-- @slot -->
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { withButton, ButtonProps } from '@owl/core/logic/logic-button';

/**
 * 按钮组件
 */
export default defineComponent({
	name: 'OButton',
	props: ButtonProps,
	setup(props, ctx) {
		return withButton({
			props,
			ctx
		});
	}
});
</script>

<style lang="scss" scoped >
@import "../../styles/_button.scss";
</style>