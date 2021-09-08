<template>
    <o-icon name="heart" size="2x" type="fas"></o-icon>
    <o-icon name="heart" size="2x" type="fal"></o-icon>
    <o-icon name="heart" size="2x" type="far"></o-icon>
    <o-icon name="heart" size="2x" type="fad"></o-icon>
    <o-icon name="heart" size="2x" type="fat"></o-icon>
    <!--品牌-->
    <o-icon name="alipay" size="2x" type="fab"></o-icon>
</template>
<script lang='ts'>
import { faAlipay } from '@fortawesome/free-brands-svg-icons';
import { faHeart as heart1 } from '@fortawesome/pro-solid-svg-icons';
import { faHeart as heart2 } from '@fortawesome/pro-light-svg-icons';
import { faHeart as heart3 } from '@fortawesome/pro-regular-svg-icons';
import { faHeart as heart4 } from '@fortawesome/pro-duotone-svg-icons';
import { faHeart as heart5 } from '@fortawesome/pro-thin-svg-icons';

import { addIcon } from '@yiird/owl';
addIcon(faAlipay, heart1, heart2, heart3, heart4, heart5)
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'IconTypeDemo',
});
</script>