<template>
    <div v-if="refresh__" v-show="display__" :id="id__" :class="class__">
        <!-- @slot -->
        <slot></slot>
    </div>
</template>
<script lang='ts' >
import { defineComponent } from 'vue';
import { withLayoutItem, LayoutItemProps } from '@owl/core';
export default defineComponent({
    name: 'OLayoutItem',
    props: LayoutItemProps,
    setup(props, ctx) {
        return withLayoutItem({ props, ctx })
    },
});
</script>