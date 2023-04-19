<template>
    <div class="wrapper">
        <div class="navigation">
            <h4 class="navigation__heading">Shop</h4>
            <div class="navigation__path">
                <a href="" class="navigation__path-home">Home</a>
                <a class="icon__next">&#10095;</a>
                <span class="navigation__path-current">Shop</span>
            </div>
            <div class="slick-container">
                <div class="slider variable-width">
                    <div class="normal" v-for="category in categories" :key="category.id">
                        <div class="navigation__product">
                            <a href="" class="navigation__product-link">
                                <img :src="require(`@/assets/img/${category.cate_image}`)" alt=""
                                    class="navigation__product-img">
                            </a>
                            <a class="navigation__product-name">{{ category.cate_name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="app__content">
                <div class="grid">
                    <div class="row">
                        <div class="col l-3">
                            <div class="category">
                                <nav class="category-nav">
                                    <h3 class="category__heading">
                                        CATEGORIES
                                    </h3>
                                    <ul class="category-list">
                                        <li class="category-item" v-for="category in categories" :key="category.id">
                                            <div class="category-item-check">
                                                <input type="radio"  name="text" class="common_selector" @click="loadAndFilterData(category.cate_name)" v-model="message">
                                                <label class="category-item__link">{{ category.cate_name }}</label>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col l-9">
                            <div class="products">
                                <div class="products-heading">
                                    <span class="products-heading_show" >Showing all {{ !message ? products.length : productFilters.length }} results</span>
                                    <div class="products-display">
                                        <ul class="products-display__item">
                                            <li class="products-display__list">
                                                <span class="layer-first">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-middle">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-last">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </li>
                                            <li class="products-display__list">
                                                <span class="layer-first active">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-middle active">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-last active">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </li>
                                            <li class="products-display__list ">
                                                <span class="layer-first">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-middle">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span class="layer-last">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </li>
                                            <li class="products-display__list">
                                                <span class="layer-first">
                                                    <span></span>
                                                    <span class="layer-long"></span>
                                                </span>
                                                <span class="layer-middle">
                                                    <span></span>
                                                    <span class="layer-long"></span>
                                                </span>
                                                <span class="layer-last">
                                                    <span></span>
                                                    <span class="layer-long"></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="products-display-sort">
                                            <input type="checkbox" hidden class="display__check" id="display__check">
                                            <label for="display__check">
                                                <span class="display__sort">Default Sorting
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid">
                                    <div class="row no-gutters products__rows" v-if="!message">
                                        <ProductItem v-bind:product="product" v-for="product in products" :key="product.id">
                                        </ProductItem>
                                    </div>
                                    <div class="row no-gutters products__rows" v-if="message">
                                        <ProductItem v-bind:product="product" v-for="product in productFilters" :key="product.id">
                                        </ProductItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '@/components/Shop/Product-item.vue'
import axios from 'axios'
export default {
    name: 'ShopPaging',
    components: {
        ProductItem
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    cate_name: 'electronics',
                    cate_image: 'cate1.png'
                },
                {
                    id: 2,
                    cate_name: "men's clothing",
                    cate_image: 'cate3.jpg'
                },
                {
                    id: 3,
                    cate_name: 'Dining Chairs',
                    cate_image: 'cate5.jpg'
                },
                {
                    id: 4,
                    cate_name: 'Tables',
                    cate_image: 'cate6.jpg'
                },
                {
                    id: 5,
                    cate_name: 'Lamps',
                    cate_image: 'cate2.jpg'
                }
            ],
            products: [],
            productFilters: [],
            message: false
        }
    },
    mounted() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                this.products = response.data;
                console.log(this.products);

            })
            .catch(e => {
                console.log(e.message)
            })

        
    },
    computed: {
        
    },
    methods: {
        loadAndFilterData(cateName) {
            axios.get("https://fakestoreapi.com/products")
            .then(response => {
                this.productFilters = response.data.filter((product) => {
                    return product.category === cateName
                })
                
            })
            .catch(e => {
                console.log(e.message)
            })
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/grid.css';
@import '@/assets/css/shop.css';
</style>