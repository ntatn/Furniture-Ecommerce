<template>
    <tr v-for="(product, index) in products" :key="product._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{product.title}}
        </th>
        <td class="px-6 py-4">
            {{product.category}}
        </td>
        <td class="px-6 py-4">
            ${{product.price}}
        </td>
        <td class="px-6 py-4 text-right">
            <router-link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" :to="{name: 'edit', params: {id: product._id}}">Edit</router-link>
        </td>
        <td class="px-6 py-4 text-left">
            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="deleteProduct(index, product._id)">Delete</a>
        </td>
    </tr>
    
</template>

<script>
import {axiosdefault} from "@/interceptors/axios-base.js"
export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        axiosdefault.get("/product").then(response => {
            this.products = response.data.metadata
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteProduct(index, id){
            axiosdefault.delete(`/product/${id}`)
            .catch(err => {
                console.log(err)
            })
            this.products.splice(index, 1)
        }
        
        
    }
}

</script>