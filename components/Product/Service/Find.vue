<script setup lang="ts" async>
import { useDebounceFn } from '@vueuse/core';
import type IProduct from '~/types/useProduct';
const { loading } = useHelper();
const router = useRouter();
const data = await useMockProducts();
// console.log(data.value[0].productID);
const searchInput = ref<string>('');
const isSearching = ref<boolean>(false);
const toE = ref<boolean>(false);
const toA = ref<boolean>(false);
const searchResult = ref();

const triggerSearch = useDebounceFn((value: string) => {
    loading.value = false;
    isSearching.value = false;
    searchResult.value = data.value.find(v => v.productID === value);
    // console.log(searchResult.value);
}, 1000);

const price = computed(() => (searchResult.value.price - (searchResult.value.price * searchResult.value.sale / 100)).toFixed(2));
</script>

<template>
    <div>
        <form class="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6"
            @submit.prevent="triggerSearch(searchInput)">
            <label class="relative flex gap-2 items-center">
                <Icon v-if="!isSearching" name="fluent:box-multiple-search-20-regular" size="24"
                    class="absolute left-2 opacity-[0.8]" />
                <Icon v-else name="eos-icons:bubble-loading" size="24" class="absolute left-2 opacity-[0.8]" />

                <Input id="searchInput" name="searchInput" class="pl-10 sm:min-w-3xs min-w-full text-sm"
                    placeholder="Search by Product Id..." v-model="searchInput" />
            </label>
            <Button @click="loading = true, isSearching = true, triggerSearch(searchInput)" :disabled="loading">
                <p v-if="!loading" class="px-4">Search</p>
                <Spinner v-else />
            </Button>
        </form>
        <main class="">
            <div v-if="!searchResult" class="text-center h-full">
                <img src="@/assets/media/search-bg.webp" alt="search-bg"
                    class="sm:w-[30rem] w-[24rem] h-full m-auto opacity-80">
                <div
                    class="flex items-center justify-center gap-2 mb-2 sm:mb-14 text-neutral-700 dark:text-neutral-100">
                    <p class="font-medium">
                        No product to show. Try entering a product ID to get started!</p>
                    <Icon name="cuida:box-outline" size="25" />
                </div>
            </div>
            <div v-else class="w-full flex justify-center items-start h-[70dvh]">
                <div
                    class="my-4 w-full sm:w-9/12 md:w-7/12 bg-background shadow-sm border rounded-lg p-3 flex flex-wrap gap-4">
                    <img class="sm:size-36 size-32 border-[2px] shadow rounded" :src="searchResult.preview"
                        alt="product image">
                    <div class="flex flex-col sm:gap-1 gap-px">
                        <h2>Product ID: #{{ searchResult.productID }}</h2>
                        <p>{{ searchResult.name }}</p>
                        <p>${{ price }} <span v-if="searchResult.sale" class="ml-2 bg-red-400 dark:bg-red-800 text-red-100 rounded 
                                font-medium px-[2px] py-px">-{{ searchResult.sale }}%</span></p>
                        <p class="capitalize font-medium">{{ searchResult.category }}</p>
                    </div>
                    <div class="w-full flex flex-col gap-2 items-end">
                        <div class="flex gap-2">
                            <Button @click="toA = true, router.push(`/products/${searchResult.productID}`)">
                                <p v-if="!toA" class="px-4">View</p>
                                <Spinner v-else />
                            </Button>
                            <Button @click="toE = true, router.push(`/products/edit/${searchResult.productID}`)">
                                <p v-if="!toE" class="px-4">Edit</p>
                                <Spinner v-else />
                            </Button>
                        </div>
                        <p class="text-xs">
                            Product ID: #{{ searchResult.productID }}, Created Date:{{ searchResult.createdDate }}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>