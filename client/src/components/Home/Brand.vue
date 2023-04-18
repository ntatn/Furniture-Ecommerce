<template>
    <div class="brand">
        <div class="brand__container">
          <div class="brand__sclick" v-for="brand in brand" :key="brand.id">
            <a href="" class="brand__link">
              <img :src="require(`@/assets/img/brand/${brand.name_brand}.png`)" alt="" class="brand__img">  
            </a>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'TheBrand',
    data() {
        return {
            brand: [
                {
                    id: 1,
                    name_brand: 'brand__1'
                },
                {
                    id: 2,
                    name_brand: 'brand__2'
                },
                {
                    id: 3,
                    name_brand: 'brand__3'
                },
                {
                    id: 4,
                    name_brand: 'brand__4'
                },
                {
                    id: 5,
                    name_brand: 'brand__5'
                }
            ]
        }
    }
}

</script>

<style scoped>
@import '@/assets/css/main.css';
</style>