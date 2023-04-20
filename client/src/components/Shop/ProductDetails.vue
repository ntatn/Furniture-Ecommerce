<template>
    <div class="wrapper">
        <Header />
        <div class="product-details-wrapper">
            <div class="full-screen">
                <div class="product-details-container">
                    <div class="grid">
                        <form class="form-submit">
                            <div class="row">
                                <div class="col l-7">
                                    <div class="product-details-image">
                                        <div class="product-image-big">
                                            <img :src="product.image" alt="">
                                            <input type="hidden" name="hidden_img" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-5">
                                    <div class="product-details-information">
                                        <div class="product-details-path">
                                            <a href="." class="product-details-path-home">Home > <span>Details</span></a>
                                        </div>
                                        <div class="product-details-heading">
                                            <p class="product-details-name">{{ product.title }}</p>
                                            <div class="price-container">
                                                <p class="product-details-price">${{ product.price }}</p>
                                                <input type="hidden" name="quantity" value="1" />
                                            </div>
                                        </div>
                                        <div class="product-details-description">
                                            <p>{{ product.description }}</p>
                                            <button name='add_to_cart' type='submit' class='product-details-add-cart'>
                                                ADD TO CART
                                            </button>
                                            <div class="product-details-wishlist">
                                                <button name="add_to_wishlist" type="submit"
                                                    class="product-details-wishlist-link">
                                                    <i class="far fa-heart"></i>
                                                </button>
                                                <span>Add to Wishlist</span>
                                            </div>
                                        </div>
                                        <div class="product-details-meta">
                                            <span class="meta-title">
                                                Brand: <span class="meta-title-content"></span>
                                            </span>
                                            <span class="meta-title">
                                                Category: <a class="meta-title-content">
                                                    {{ product.category }}
                                                </a>
                                            </span>
                                            <div class="social-icon">
                                                <label class="meta-title-lable" for="">Share: </label>
                                                <div class="social-share">
                                                    <a href="" class="meta-title-content"><i
                                                            class="meta-title-content fab fa-facebook-f"></i></a>
                                                    <a href="" class="meta-title-content"><i class="fab fa-twitter"></i></a>
                                                    <a href="" class="meta-title-content"><i
                                                            class="fab fa-linkedin"></i></a>
                                                    <a href="" class="meta-title-content"><i
                                                            class="fab fa-pinterest"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="product-details-content">
                <div class="product-details-tab-description">
                    <p class="product-details-tab-title">Description</p>
                    <span class="product-details-tab-text">
                        {{ product.description }}
                    </span>
                </div>
                <div class="product-details-tab-reviews">
                    <p class="product-details-tab-title">Reviews</p>
                    <div class="product-details-tab-reviews-content">
                        <p class="product-details-tab-reviews-heading">Reviews</p>
                        <span class="reviews-history">There are no reviews yet.</span>
                        <div class="review-form">
                            <span class="comment-reply-title">
                                <i class="far fa-edit"></i>BE THE FIRST TO REVIEW
                            </span>
                            <span class="notes-review">Your email address will not be published. Required fields are marked
                                *</span>
                            <p class="rating">Your rating
                                <i class="rating-star fas fa-star"></i>
                                <i class="rating-star fas fa-star"></i>
                                <i class="rating-star fas fa-star"></i>
                                <i class="rating-star fas fa-star"></i>
                                <i class="rating-star fas fa-star"></i>
                            </p>
                            <div class="content-info-reviews">
                                <div class="content-info-reviews-left">
                                    <input type="text" placeholder="Name*" class="input-reviews input-reviews-name">
                                    <input type="text" placeholder="Email*" class=" input-reviews input-reviews-email">
                                </div>
                                <div class="content-info-reviews-right">
                                    <textarea class="input-reviews-content" name="" id="" cols="30" rows="10"
                                        placeholder="Your Reviews"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="other-reviews">
                    <p class="product-details-tab-title">Other Reviews</p>
                    <ul class="reviews-content">
                        <li class="review-list">
                            <p class="review-name">By Lisa</p>
                            <p class="reiew-email">lisa@gmail.com</p>
                            <span class="review-content">Sản phẩm rất tốt !~~</span>
                        </li>
                        <li class="review-list">
                            <p class="review-name">By John</p>
                            <p class="reiew-email">john@gmail.com</p>
                            <span class="review-content">Ghế có độ đàn hồi tốt! 10đ</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
    components: {
        Header, Footer
    },
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const product_id = this.$route.params.id
                return this.product = response.data.find((product) => product.id == product_id)
            })
            .catch(e => {
                console.log(e.message)
            })
    },
}
</script>

<style scoped>@import '@/assets/css/details.css';
@import '@/assets/css/shop.css';</style>