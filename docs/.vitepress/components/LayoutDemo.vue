<template>
	<o-layout mode="column-12" :gutter="5">
		<o-layout-item class="item" :options="{ md: 5 }">1</o-layout-item>
		<o-layout-item class="item" :options="{ xxl: 4, xl: 2, md: 2 }">2</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">3</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">4</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">5</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">6</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">7</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">8</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">9</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">10</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">11</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
	</o-layout>
	<br />
	<o-layout mode="column-24" :gutter="5">
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
		<o-layout-item class="item" :options="{ md: 1 }">12</o-layout-item>
	</o-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'LayoutDemo',
	setup(props, ctx) {
		const mode = ref('column-12');
		setTimeout(() => {
			mode.value = 'column-24';
		}, 2000);
		return { props, ctx, mode };
	}
});
</script>
<style>
.container[data-v-7f5fbed2] {
	max-width: 100%;
}
</style>
<style lang="scss" scoped>
.o-layout {
	background-color: red;
}
.o-layout-item {
	height: 100px;
	background-color: yellow;
}
</style>
