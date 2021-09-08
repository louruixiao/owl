<template>
    <div v-if="refresh__" v-show="display__" :id="id__" :class="class__">
        <!-- @slot -->
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { withCol, ColProps } from '@owl/core';
export default defineComponent({
    name: 'OCol',
    props: ColProps,
    setup(props, ctx) {
        return withCol({ props, ctx })
    },
});
</script>
