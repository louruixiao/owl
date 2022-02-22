<template>
	<o-code-editor :code="codeData" height="500px" width="700px"></o-code-editor>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'CodeEditorDemo',
	setup() {
		const codeData = '{}';
		return { codeData };
	}
});
</script>
