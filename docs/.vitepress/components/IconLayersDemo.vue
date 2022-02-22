<template>
	<font-awesome-layers class="fa-lg">
		<font-awesome-icon icon="circle" />
		<font-awesome-icon icon="check" transform="shrink-6" class="fa-inverse" />
	</font-awesome-layers>
</template>
<script lang="ts">
import { faCheck, faCircle } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent } from 'vue';

addIcon(faCircle, faCheck);
export default defineComponent({
	name: 'IconLayersDemo'
});
</script>
