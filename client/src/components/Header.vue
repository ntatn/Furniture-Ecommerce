<template>
    <div class="header">
        <div class="header__container">
            <div class="header__topbar">
                <div class="header__topbar-left">
                    <a class="header__location">
                        <ThemifyIcon icon="location-pin" class="header__icon"/>
                        <span class="header__text">Store Location</span>
                    </a>
                    <a class="header__mail">
                        <ThemifyIcon icon="email" class="header__icon-mail"/>
                        <span class="header__text">example@gmail.com</span>
                    </a>
                </div>
                <div class="header__topbar-right">
                    <a class="header__text_gift">Gift Cards</a>
                    <a class="header__text">FAQs</a>
                </div>
            </div>
            <div class="header__navigation">
                <div class="header__menu">
                    <div class="header__logo">
                        <!-- <a class="header__logo-link">
                            <img src="../assets/img/logo_app.png" alt="" class="header__logo-img">
                        </a> -->
                    </div>
                    <div class="header__nav">
                        <ul class="header__nav-items">
                            <li class="header__nav-lists">
                                <router-link  class="header__nav-link" to="/">HOME</router-link>                 
                            </li>
                            <li class="header__nav-lists">
                                <router-link class="header__nav-link" to="shop">SHOP</router-link>
                            </li>        
                        </ul>
                    </div>
                </div>
                <div class="headerr__active">
                    <ul class="headerr__active-item">
                        <li class="headerr__active-list">
                            <a href="#" class="headerr__active-link">
                                <i class="header__active-icon search fas fa-search"></i>
                            </a>
                        </li>
                        <li class="headerr__active-list header__navbar-user">
                            <a href="#" class="headerr__active-link">
                                <i class=" header__active-icon user-login far fa-user"></i>
                            </a> 
                        </li>
                        <li class="headerr__active-list">
                            <a href="#" class="headerr__active-link">
                                <i class="header__active-icon far fa-star"></i>
                            </a>
                        </li>
                        <li class="headerr__active-list cart">
                            <a href="#" class="headerr__active-link">
                                <i class="header__active-icon fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ThemifyIcon from 'vue-themify-icons'
export default {
    name: 'TheHeader',
    components: {
        ThemifyIcon
    }
}

</script>

<style scoped>

@import '@/assets/css/header.css';

</style>