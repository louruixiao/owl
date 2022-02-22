<template>
	<o-layout-grid class="container" :columns="columns">
		<div class="item">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">6</div>
		<div class="item">7</div>
		<div class="item">8</div>
		<div class="item">9</div>
		<!-- <div class="item">10</div> -->
	</o-layout-grid>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'LayoutGridDemo',
	setup(props) {
		const columns = ref();
		setTimeout(() => {
			columns.value = 5;
		}, 2000);
		return {
			columns
		};
	}
});
</script>
<style lang="scss" scoped>
.item {
	font-size: 2rem;
	color: white;
	text-align: center;
}
.item:nth-child(1) {
	background-color: red;
}
.item:nth-child(2) {
	background-color: rgb(45, 63, 218);
}
.item:nth-child(3) {
	background-color: rgb(37, 201, 37);
}
.item:nth-child(4) {
	background-color: rgb(218, 231, 26);
}
.item:nth-child(5) {
	background-color: rgb(73, 53, 53);
}
.item:nth-child(6) {
	background-color: rgb(31, 221, 224);
}

.item:nth-child(7) {
	background-color: rgb(240, 17, 184);
}

.item:nth-child(8) {
	background-color: rgb(48, 87, 242);
}

.item:nth-child(9) {
	background-color: rgba(149, 238, 219, 0.411);
}
.item:nth-child(10) {
	background-color: rgb(245, 111, 9);
}
</style>
