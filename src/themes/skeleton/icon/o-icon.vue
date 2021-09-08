<template>
	<font-awesome-icon
		v-if="refresh__"
		v-show="display__"
		v-bind="$attrs"
		:id="id__"
		:class="class__"
		:icon="obtainIcon"
		:fixed-width="fixedWidth"
		:rotation="rotation"
		:flip="flip"
		:pull="pull"
		:pulse="pulse"
		:spin="spin"
	></font-awesome-icon>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { withIcon, IconProps } from '@owl/core/logic/logic-icon';

export default defineComponent({
	name: 'OIcon',
	props: IconProps,
	setup(props, ctx) {
		return withIcon({
			props,
			ctx
		});
	}
});
</script>
