<template>
	<div v-if="refresh__" v-show="display__" :id="id__" :class="class__" v-bind="$attrs" :style="{ height: height, width: width }">
		<div ref="containerRef" :class="containerClass"></div>
	</div>
</template>
<script lang="ts">
import { CodeEditorProps, withCodeEditor } from '@owl/core/logic/logic-code-editor';
import { defineComponent } from 'vue';

/**
 * 按钮组件
 */
export default defineComponent({
	name: 'OCodeEditor',
	props: CodeEditorProps,
	setup(props, ctx) {
		return withCodeEditor({
			props,
			ctx
		});
	}
});
</script>

<style lang="scss" scoped>
@import '../../themes/styles/_code-editor.scss';
</style>
