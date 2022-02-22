<template>
	<o-icon icon="heart" size="2x"></o-icon>
	<o-icon icon="heart" flip="horizontal" size="2x"></o-icon>
	<o-icon icon="heart" flip="vertical" size="2x"></o-icon>
	<o-icon icon="heart" :rotation="90" size="2x"></o-icon>
	<o-icon icon="heart" :rotation="180" size="2x"></o-icon>
	<o-icon icon="heart" :rotation="270" size="2x"></o-icon>
	<o-icon icon="heart" :rotation="270" flip="horizontal" size="2x"></o-icon>
	<o-icon icon="heart" flip="vertical" size="2x"></o-icon>
</template>
<script lang="ts">
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent } from 'vue';

addIcon(faHeart);
export default defineComponent({
	name: 'IconRotateDemo'
});
</script>
