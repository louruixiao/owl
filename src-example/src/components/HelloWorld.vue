<template>
	<o-button @click="changeSize('1x')">1x</o-button>
	<o-button @click="changeSize('2x')">2x</o-button>
	<o-button @click="changeSize('10x')">10x</o-button>
	<o-icon name="heart" :size="sizeRef"></o-icon>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup(props, ctx) {
		const sizeRef = ref('1x');
		const changeSize = (size: string) => {
			console.log(size)
			sizeRef.value = size;
		}
		return {
			sizeRef,
			changeSize
		}
	},
});
</script>