<template>
    <div class="category">
        <div class="category__container">
            <div class="category__wrapper">
                <div class="category__title">
                    <h2 class="category__title-details">Top Categories</h2>
                </div>
                <div class="slider_category">
                    <div class="category__product-wrapper-img" v-for="img in categoriesImage" :key="img.id">
                        <a href="" class="category-link">
                            <img :src="require(`@/assets/img/${img.img_name}`)" class="category__product-img" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="colections">
        <div class="colections__container">
          <div class="colections__wrapper">
            <a href="">
              <img src="@/assets/img/colection1.jpg" alt="" class="colections__img">
            </a>
            <div class="colections__content">
              <p class="colections__content-description">FROM LOVESEATS TO SECTIONALS.</p>
              <p class="colections__content-name">Comfy Loungings</p>
              <a href="" class="colections__content-link">
                Explore Collection
              </a>
            </div>
          </div>
          <div class="colections__wrapper">
            <a href="">
              <img src="@/assets/img/collections2.jpg" class="colections__img">
            </a>
            <div class="colections__content">
              <p class="colections__content-description">SALE UP TO 20% OFF ALL ITEMS</p>
              <p class="colections__content-name">Scandinavian Style</p>
              <a href="" class="colections__content-link">
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: 'TopCategories',
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
                }
            ]
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/main.css';
</style>