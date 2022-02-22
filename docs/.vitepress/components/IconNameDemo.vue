<template>
	<!-- 字符串格式 -->
	<o-icon icon="mask" type="fad" size="2x"></o-icon>
	<o-icon icon="mask" type="fas" size="2x"></o-icon>
	<br />
	<!-- 数组格式 -->
	<o-icon :icon="['fad', 'mask']" size="2x"></o-icon>
	<o-icon :icon="['fas', 'mask']" type="fas" size="2x"></o-icon>
	<br />
	<!-- 对象格式 -->
	<o-icon ref="icon" :icon="computedMask" size="2x"></o-icon>
	<o-icon :icon="fadMask" size="2x"></o-icon>
	<o-icon :icon="fasMask" size="2x"></o-icon>
</template>
<script lang="ts">
import { faMask as fadMask } from '@fortawesome/pro-duotone-svg-icons';
import { faMask as fasMask } from '@fortawesome/pro-solid-svg-icons';
import { OIcon } from '@owl/skeleton';
import { addIcon } from '@yiird/owl';
import { computed, defineComponent, ref } from 'vue';

addIcon(fadMask, fasMask);
export default defineComponent({
	name: 'IconNameDemo',
	setup() {
		const icon = ref<InstanceType<typeof OIcon>>();

		const computedMask = computed(() => {
			return fadMask;
		});

		const doClick = () => {
			alert(11);
		};

		return {
			computedMask,
			fadMask,
			fasMask,
			icon,
			doClick
		};
	}
});
</script>
