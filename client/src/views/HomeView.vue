<template>
  <div class="home">
    <Background/>
    <TopCategories></TopCategories>
    <News/>
    <Brand/>
  </div>
</template>

<script>
// @ is an alias to /src
import Background from '../components/Home/Background.vue';
import TopCategories from '../components/Home/TopCategories.vue';
import News from '../components/Home/News.vue';
import Brand from '../components/Home/Brand.vue';
export default {
  name: 'HomeView',
  components: {
    Background, TopCategories, News, Brand
  }
}
</script>
