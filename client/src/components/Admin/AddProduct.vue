
<template>
    <form @submit.prevent="handleSubmit">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Note!</h2>
                <p class="mt-1 text-lg leading-6 text-gray-600">This information will be displayed publicly so be careful
                    what you share.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="title" class="block text-lg font-medium leading-6 text-gray-900">Title</label>
                        <div class="mt-2">
                            <input type="text" id="title" v-model="title" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="price" class="block text-lg font-medium leading-6 text-gray-900">Price</label>
                        <div class="mt-2">
                            <input type="number" id="price" v-model="price" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <label  class="block text-lg font-medium leading-6 text-gray-900">Category</label>
                        <div class="mt-2">
                            <select  v-model="category" autocomplete="country-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-6">
                                <option>Tables</option>
                                <option>Lamps</option>
                                <option>Bedroom</option>
                                <option>Living Room</option>
                                <option>Kitchen & Dining</option>
                            </select>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="price" class="block text-lg font-medium leading-6 text-gray-900">Quantity</label>
                        <div class="mt-2">
                            <input type="number" id="price"  v-model="quantity" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="col-span-full">
                        <label for="about" class="block text-lg font-medium leading-6 text-gray-900">Description</label>
                        <div class="mt-2">
                            <textarea id="about" name="about" rows="3" v-model="description"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                    </div>



                    <div class="col-span-full">
                        <label for="cover-photo" class="block text-lg font-medium leading-6 text-gray-900">Image</label>
                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div class="text-center">
                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div class="mt-4 flex text-lg leading-6 text-gray-600">
                                    <label for="file-upload"
                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" @change="uploadImage()" name="file-upload" type="file" class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-sm leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-lg  font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
        </div>
    </form>
</template>

<script>
import { axiosdefault } from '@/interceptors/axios-base.js';
    export default {
        data() {
            return {
                title: '',
                price: 0,
                quantity: 0,
                description: '',
                category: '',
                thumb: ''
            }
        },
        methods: {
            uploadImage() {
                const file = document.querySelector('input[type=file]').files[0]
                const reader = new FileReader()

                let rawImg;
                reader.onloadend = () => {
                    rawImg = reader.result;
                    console.log(rawImg);
                    this.$data.thumb = '' + rawImg;
                }
                reader.readAsDataURL(file);
                
            },
            handleSubmit(){
                axiosdefault.post("/product", {
                    title: this.title,
                    price: this.price,
                    quantity: this.quantity,
                    description: this.description,
                    category: this.category,
                    thumb: this.thumb

                }).then(this.$router.go)
            }
        }
    }
</script>
<script setup>
import { PhotoIcon } from '@heroicons/vue/24/solid'
</script>



