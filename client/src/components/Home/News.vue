<template>
    <div class="news">
        <div class="news__container">
            <h3 class="news__heading">Newsletters</h3>
            <p class="news__heading-sub">Sign up for newsletter and get 10% cash back offer</p>
            <div class="news__form">
                <input type="email" class="news__input" placeholder="Your email address..." required>
                <input type="submit" class="btn news__btn-submit" value="SUBCRIBE">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TheNews'
}

</script>

<style scoped>
@import '@/assets/css/main.css';
</style>