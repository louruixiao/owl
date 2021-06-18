<template>
	<button v-if="refresh__" v-show="display__" :id="id__" :class="class__" :style="style__" v-bind="$attrs">
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { withButton } from '@owl/core';
const OButton = defineComponent({
	inheritAttrs: false,
	name: 'OButton',
	props: {},
	setup(props, ctx) {
		return withButton({
			props,
			ctx
		});
	}
});
export default OButton;
</script>
<style scoped></style>
