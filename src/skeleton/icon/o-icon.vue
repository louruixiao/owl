<template>
	<span v-if="obtainIsFlipAndRotation && refresh__" :class="obtainFlip" style="display: inline-block">
		<font-awesome-icon v-show="display__" v-bind="$attrs" :id="id__" :class="class__" :icon="obtainIcon" :fixed-width="fixedWidth" :pull="pull" :border="border">
		</font-awesome-icon>
	</span>
	<font-awesome-icon
		v-else-if="refresh__"
		v-show="display__"
		v-bind="$attrs"
		:id="id__"
		:class="class__"
		:icon="obtainIcon"
		:fixed-width="fixedWidth"
		:flip="obtainFlip"
		:pull="pull"
		:border="border">
	</font-awesome-icon>
</template>
<script lang="ts">
import { withIcon } from '@owl/core/logic/logic-icon';
import { IconProps } from '@owl/core/props/props-icon';
import { defineComponent } from 'vue';

/**
 * 使用`fontawesome`作为图标库，默认集成free图标库，如果需pro图标库请查看指南
 */
export default defineComponent({
	name: 'OIcon',
	props: IconProps,
	expose: ['obtainIcon'],
	setup(props, ctx) {
		return withIcon({
			props,
			ctx
		});
	}
});
</script>

<style lang="scss" scoped>
@import '../../themes/styles/_icon.scss';
</style>
