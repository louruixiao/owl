<template>
	<o-button aa="aa" ref="buttonDom" @click="addClassxx">ddddd</o-button>
</template>

<script lang="ts">
import { ButtonExpose, OwlComponentInstance, addClass } from '@yiird/owl';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			required: true
		}
	},
	setup: () => {
		const count = ref(0);
		const buttonDom = ref<OwlComponentInstance<ButtonExpose>>();
		const addClassxx = () => {
			if (buttonDom.value) {
				buttonDom.value.addClass('xxxx');
				addClass('dddd');
				//addClass.call(buttonDom.value, 'wwww');
			}
		};
		return { count, buttonDom, addClassxx };
	}
});
</script>
