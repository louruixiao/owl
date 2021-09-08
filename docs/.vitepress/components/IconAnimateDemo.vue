<template>
    <div>
        <o-icon name="spinner" size="2x" type="fad" spin></o-icon>
        <o-icon name="spinner" size="2x" type="fad" pulse></o-icon>
    </div>
    <div>
        <o-icon name="spinner" size="2x" type="fad" :animiate="['spin']"></o-icon>
        <o-icon name="spinner" size="2x" type="fad" :animiate="['pulse']"></o-icon>
        <o-icon name="spinner" size="2x" type="fad" :animiate="['spin', 'spin-reverse']"></o-icon>
    </div>
    <o-icon name="heart" size="2x" type="fad" :animiate="['beat']"></o-icon>
    <o-icon name="heart" size="2x" type="fad" :animiate="['flash']"></o-icon>
    <o-icon name="heart" size="2x" type="fad" :animiate="['flip']"></o-icon>
    <o-icon name="heart" size="2x" type="fad" :animiate="['fade']"></o-icon>
</template>
<script lang='ts'>
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import { addIcon } from '@yiird/owl';
addIcon(faSpinner)
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'IconTypeDemo',
});
</script>