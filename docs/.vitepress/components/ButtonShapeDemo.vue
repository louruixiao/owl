<template>
	<o-button color="warning" size="lg" shape="circle">
		<o-icon icon="heart" size="1x"></o-icon>
	</o-button>
	<o-button color="warning" size="lg" shape="square">
		<o-icon icon="heart" size="1x"></o-icon>
	</o-button>
	<o-button color="warning" size="lg" shape="ellipse">
		<o-icon icon="heart" size="1x"></o-icon>
		ellipse
	</o-button>
</template>
<script lang="ts">
import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent } from 'vue';
addIcon(faHeart);
export default defineComponent({
	name: 'ButtonShapeDemo'
});
</script>
