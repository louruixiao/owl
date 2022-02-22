<template>
	<div style="clear: both; overflow: hidden">
		<div style="float: left; overflow: hidden; width: 200px">
			<div><o-icon icon="skating" size="5x" style="background: DodgerBlue"></o-icon></div>
			<div><o-icon icon="skiing" size="5x" style="background: skyblue"></o-icon></div>
			<div><o-icon icon="skiing-nordic" size="5x" style="background: DodgerBlue"></o-icon></div>
			<div><o-icon icon="snowboarding" size="5x" style="background: skyblue"></o-icon></div>
			<div><o-icon icon="snowplow" size="5x" style="background: DodgerBlue"></o-icon></div>
			<span>未设置fixed-width</span>
		</div>
		<div style="float: left; overflow: hidden; width: 200px">
			<div><o-icon icon="skating" fixed-width size="5x" style="background: DodgerBlue"></o-icon></div>
			<div><o-icon icon="skiing" fixed-width size="5x" style="background: skyblue"></o-icon></div>
			<div><o-icon icon="skiing-nordic" fixed-width size="5x" style="background: DodgerBlue"></o-icon></div>
			<div><o-icon icon="snowboarding" fixed-width size="5x" style="background: skyblue"></o-icon></div>
			<div><o-icon icon="snowplow" fixed-width size="5x" style="background: DodgerBlue"></o-icon></div>
			<span>设置fixed-width</span>
		</div>
	</div>
</template>
<script lang="ts">
import { faSkating, faSkiing, faSkiingNordic, faSnowboarding, faSnowplow } from '@fortawesome/pro-solid-svg-icons';
import { addIcon } from '@yiird/owl';
import { defineComponent } from 'vue';

addIcon(faSkating, faSkiing, faSkiingNordic, faSnowboarding, faSnowplow);
export default defineComponent({
	name: 'IconFixedWidthDemo'
});
</script>
