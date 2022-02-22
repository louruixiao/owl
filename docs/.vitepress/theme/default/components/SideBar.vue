<script setup lang="ts">
import { defineProps, useSlots } from 'vue';
import NavLinks from './NavLinks.vue';
import SideBarLinks from './SideBarLinks.vue';

defineProps<{ open: boolean; direaction?: string; nav?: boolean }>();
const slots = useSlots();
</script>

<template>
	<aside :class="`sidebar ${(direaction || 'left') == 'left' && open ? 'open' : ''} sidebar-${direaction || 'left'}`">
		<NavLinks v-if="nav" class="nav" />

		<slot name="sidebar-top" />

		<slot v-if="slots['sidebar-body']" name="sidebar-body"></slot>
		<SideBarLinks v-else />

		<slot name="sidebar-bottom" />
	</aside>
</template>

<style scoped>
.sidebar {
	position: fixed;

	top: var(--header-height);
	bottom: 0;

	z-index: var(--z-index-sidebar);
	width: 16.4rem;
	background-color: var(--c-bg);
	overflow-y: auto;
	transition: transform 0.25s ease;
}

.sidebar-left {
	left: 0;
	/* border-right: 1px solid var(--c-divider); */
	transform: translateX(-100%);
}
.sidebar-right {
	right: 0;
	/* border-left: 1px solid var(--c-divider); */
	transform: translateX(100%);
}

@media (min-width: 1200px) {
	.sidebar-right {
		transform: translateX(0);
	}
}

@media (min-width: 960px) {
	.sidebar-left {
		transform: translateX(0);
	}
}

.sidebar.open {
	transform: translateX(0);
}

.nav {
	display: block;
}

@media (min-width: 720px) {
	.nav {
		display: none;
	}
}
</style>
