<template>
    <o-layout mode="column-12" :gutter="5">
        <o-layout-item class="item" :md="5">1</o-layout-item>
        <o-layout-item class="item" :xxl="1" :xl="2">2</o-layout-item>
        <o-layout-item class="item" :md="1">3</o-layout-item>
        <o-layout-item class="item">4</o-layout-item>
        <o-layout-item class="item" :md="1">5</o-layout-item>
        <o-layout-item class="item" :md="1">6</o-layout-item>
        <o-layout-item class="item" :md="1">7</o-layout-item>
        <o-layout-item class="item" :md="1">8</o-layout-item>
        <o-layout-item class="item" :md="1">9</o-layout-item>
        <o-layout-item class="item" :md="1">10</o-layout-item>
        <o-layout-item class="item" :md="1">11</o-layout-item>
        <o-layout-item class="item" :md="1">12</o-layout-item>
    </o-layout>
    <o-layout mode="form" :gutter="5">
        <o-layout-item class="item" :md="5">1</o-layout-item>
        <o-layout-item class="item" :md="1">2</o-layout-item>
        <o-layout-item class="item" :md="1">3</o-layout-item>
        <o-layout-item class="item" :sm="5">4</o-layout-item>
        <o-layout-item class="item" :md="1">5</o-layout-item>
        <o-layout-item class="item" :md="1">6</o-layout-item>
        <o-layout-item class="item" :md="1">7</o-layout-item>
        <o-layout-item class="item" :md="2">8</o-layout-item>
        <o-layout-item class="item" :md="1">9</o-layout-item>
        <o-layout-item class="item" :md="1">10</o-layout-item>
        <o-layout-item class="item" :md="1">11</o-layout-item>
        <o-layout-item class="item" :md="1">12</o-layout-item>
    </o-layout>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'LayoutDemo',
    setup(props, ctx) {
        return { props, ctx }
    },
});
</script>
<style>
.container[data-v-7f5fbed2] {
    max-width: 100%;
}
</style>
<style lang="scss" scoped>
.o-layout {
    background-color: red;
}
.o-layout-item {
    height: 100px;
    background-color: yellow;
}
</style>