<template>
    <div class="shop">
        <TheHeader/>
        <ShopPaging/>
        <TheFooter/>
    </div>
</template>



<script>
import ShopPaging from '@/components/Shop/Paging.vue'
import TheHeader from '@/components/Header.vue'
import TheFooter from '@/components/Footer.vue'
export default {
    name: 'ShopView',
    components: {
        ShopPaging, TheHeader, TheFooter
    }
}
</script>

<style scoped>
@import '@/assets/css/shop.css';
</style>