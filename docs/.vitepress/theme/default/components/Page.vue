<script setup lang="ts">
import NextAndPrevLinks from './NextAndPrevLinks.vue';
import PageFooter from './PageFooter.vue';
</script>

<template>
	<main class="page">
		<div class="container">
			<slot name="top" />
			<Content class="content" />
			<PageFooter />
			<NextAndPrevLinks />
			<slot name="bottom" />
		</div>
	</main>
</template>

<style scoped>
.page {
	padding-top: var(--header-height);
}
@media (min-width: 960px) {
	.page {
		margin-left: 16.4rem;
	}
}

@media (min-width: 1200px) {
	.page {
		margin-right: 16.4rem;
	}
}

.container {
	margin: 0 auto;
	padding: 0 1.5rem 4rem;
}

.content {
	padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
	.content {
		/* fix carbon ads display */
		clear: both;
	}
}
</style>
