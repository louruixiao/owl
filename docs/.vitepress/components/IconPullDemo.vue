<template>
	<o-icon icon="quote-left" size="2x" pull="left"></o-icon>
	Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our
	arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
	<o-icon icon="quote-right" size="2x" pull="right"></o-icon>
	<br />
	<br />
	<br />
	<br />

	<o-icon ref="abc" border icon="arrow-right" size="2x" pull="right">ddddd阿斯顿发达</o-icon>
	Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our
	arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
</template>
<script lang="ts">
import { faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/pro-solid-svg-icons';
import { addIcon, OIconInstance } from '@yiird/owl';
import { defineComponent } from 'vue';

addIcon(faQuoteLeft, faQuoteRight, faArrowRight);
export default defineComponent({
	name: 'IconPullDemo',
	methods: {
		aaa() {
			const icon = this.$refs['abc'] as OIconInstance;
		}
	}
});
</script>
