<template>
    <div class="shop">
        <ShopPaging/>
    </div>
</template>



<script>
import ShopPaging from '@/components/Shop/Paging.vue'
export default {
    name: 'ShopView',
    components: {
        ShopPaging
    }
}
</script>

<style scoped>
@import '@/assets/css/shop.css';
</style>