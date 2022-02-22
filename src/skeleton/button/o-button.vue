<template>
	<button v-if="refresh__" v-show="display__" :id="id__" v-bind="$attrs" ref="rootRef" :class="class__">
		<!-- @slot button内容 -->
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { withButton } from '@owl/core/logic/logic-button';
import { ButtonProps } from '@owl/core/props/props-button';
import { defineComponent } from 'vue';

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

<style lang="scss" scoped>
@import '../../themes/styles/_button.scss';
</style>
