<template>
  <TheHeader/>
  <nav>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
  </nav>
  <router-view/>
  <TheFooter/>
</template>

<script >
import TheHeader from '@/components/Header.vue'
import TheFooter from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    TheHeader, TheFooter
  },
  data() {
    return {
      categoriesImage: [
        {
          id: 1,
          img_name: 'cate1.png'
        },
        {
          id: 2,
          img_name: 'cate2.jpg'
        },
        {
          id: 3,
          img_name: 'cate3.jpg'
        },
        {
          id: 4,
          img_name: 'cate4.jpg'
        },
        {
          id: 5,
          img_name: 'cate5.jpg'
        },
        {
          id: 6,
          img_name: 'cate6.jpg'
        }
      ]
    }
  }
}
</script>

