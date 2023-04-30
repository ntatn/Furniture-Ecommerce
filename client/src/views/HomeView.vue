<template>
  <div class="home">
    <TheHeader/>
    <Background/>
    <TopCategories></TopCategories>
    <News/>
    <Brand/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Background from '../components/Home/Background.vue';
import TopCategories from '../components/Home/TopCategories.vue';
import News from '../components/Home/News.vue';
import Brand from '../components/Home/Brand.vue';
import TheHeader from '@/components/Header.vue'
import TheFooter from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Background, TopCategories, News, Brand, TheHeader, TheFooter
  },
  
}
</script>

