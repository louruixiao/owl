<template>
	<Layout>
		<template #sidebar-body>
			<SideBarLinks />
		</template>
		<template #sidebar-right-body>
			<h3>索引</h3>
			<ul v-if="items.length > 0" class="index-links">
				<li v-for="(item, index) in items" :key="index">
					<span :style="{ 'margin-left': (item.level - 2) * 1 + 'rem' }"> </span><a :href="'#' + item.slug">{{ item.title }}</a>
				</li>
			</ul>
		</template>
	</Layout>
</template>
<script lang="ts" setup>
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import DefaultTheme from './default';
import SideBarLinks from './default/components/SideBarLinks.vue';
const route = useRoute();
const items = computed(() => {
	return route.data.headers;
});
const { Layout } = DefaultTheme;
</script>
<style scoped>
h3 {
	border-bottom: none;
	padding-bottom: 1rem;
	font-weight: 400;
}
.index-links {
	padding: 0;
	margin: 0;
	margin-left: 2rem;
	list-style: none;
}
</style>
