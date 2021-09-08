<template>
    <div v-if="refresh__" v-show="display__" :id="id__" :class="class__">
        <!--@slot-->
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { withRow, RowProps } from '@owl/core';
export default defineComponent({
    name: 'ORow',
    props: RowProps,
    setup(props, ctx) {
        return withRow({ props, ctx })
    },
});
</script>