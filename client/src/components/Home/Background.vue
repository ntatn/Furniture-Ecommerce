<template>
    <div class="background__container">
        <div class="background">
            <img srcset="@/assets/img/background1.jpeg 2x" alt="background" class="background__img">
            <div class="information">
                <p class="information__description">10% OF ALL ITEMS</p>
                <p class="information__name">Hanging lamp consists</p>
                <router-link class="information__shop-link" to="shop">SHOP COLLECTION</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheBackground',

}
</script>

<style scoped>
@import '@/assets/css/main.css';

</style>