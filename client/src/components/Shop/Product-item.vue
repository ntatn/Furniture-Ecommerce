<template>
    <div class="col l-4">
        <div class="products-details ">
        <div class="products-thumb">
          <div class="products-wrapper__img">
            <router-link :to = "{name: 'productDetails', params: {id : product._id}}" class="products-details-link">      
              <img :src="product.thumb" alt="" class="products-img">
              <input type="hidden" name="hidden_img" value="" />  
              <img :src="product.thumb" alt="" class="products-img hidden">
            </router-link>
          </div>                 
          <div class="products-button">
            <a href="" class="checkcartemty products-link add">
              <button type="submit" class="btnAddProductCart" name="add_to_cart">
                <i class="products-icon add ti-shopping-cart"></i>
                <i class="products-icon added fas fa-check"></i>
              </button>         
            </a>
            <a href="" class="products-link">
                <button type="submit" class="btnAddProductCart" name="add_to_wishlist">
                  <i class="products-icon star far fa-star"></i>
                </button> 
            </a>
          </div>
        </div>
        <div class="products-description">
          <a  class="products-name">{{product.title}}</a>
          <span class="product-quantity-shop new">${{product.price}}</span>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'product-item',
    props: ['product']

}
</script>
