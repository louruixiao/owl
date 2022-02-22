<template>
	<div>
		<div>
			当前容器宽度:
			<span style="color: red"></span>px
		</div>
		<div>绿色观察列设置规则 xs:12,sm:6,md:3,lg:1</div>
		<o-row :num="12">
			<o-col :xs="12" :sm="6" :md="3" :lg="1">
				<div class="demo focus">0</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">1</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">2</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">3</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">4</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">5</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">6</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">7</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">8</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">9</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">10</div>
			</o-col>
			<o-col :xs="1" :sm="1" :md="1" :lg="1">
				<div class="demo">11</div>
			</o-col>
		</o-row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'GridSystemDemo'
});
</script>

<style lang="scss" scoped>
.demo {
	color: white;
	font-size: 13px;
	height: 35px;
	line-height: 35px;
	border: 1px solid #282c34;
	margin-left: -1px;
}
</style>
