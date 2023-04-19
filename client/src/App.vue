<template>
  <TheHeader/>
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
  }
}
</script>

