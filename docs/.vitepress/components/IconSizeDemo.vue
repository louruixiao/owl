<template>
	<div>
		<o-button @click="changeSize('xs')">xs</o-button>
		<o-button @click="changeSize('sm')">sm</o-button>
		<o-button @click="changeSize('lg')">lg</o-button>
		<o-button @click="changeSize('1x')">1x</o-button>
		<o-button @click="changeSize('2x')">2x</o-button>
		<o-button @click="changeSize('3x')">3x</o-button>
		<o-button @click="changeSize('4x')">4x</o-button>
		<o-button @click="changeSize('5x')">5x</o-button>
		<o-button @click="changeSize('6x')">6x</o-button>
		<o-button @click="changeSize('7x')">7x</o-button>
		<o-button @click="changeSize('8x')">8x</o-button>
		<o-button @click="changeSize('9x')">9x</o-button>
		<o-button @click="changeSize('10x')">10x</o-button>
	</div>
	<div>
		<o-icon icon="heart" :size="sizeRef"></o-icon>
	</div>
</template>
<script lang="ts">
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent, ref } from 'vue';
addIcon(faHeart);
export default defineComponent({
	name: 'IconSizeDemo',
	setup() {
		const sizeRef = ref('xs');

		const changeSize = (size: string) => {
			sizeRef.value = size;
		};
		return {
			sizeRef,
			changeSize
		};
	}
});
</script>
