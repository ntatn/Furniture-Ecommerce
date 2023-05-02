<template>
    <tr v-for="product in products" :key="product._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
        <td class="px-6 py-4 text-left">
            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
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
    }
}

</script>