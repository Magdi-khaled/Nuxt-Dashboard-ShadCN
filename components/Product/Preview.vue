<script setup lang="ts">
import type IProduct from '~/types/useProduct';
const props = defineProps<{
    product: IProduct
}>();

const highlightImages = ref(0);
const highlight1 = ref(0);
const highlight2 = ref(0);
</script>

<template>
    <div class="flex flex-wrap sm:flex-nowrap items-start gap-5">
        <div class="grid grid-cols-4 sm:grid-cols-1 gap-2 order-1 sm:order-0">
            <img v-for="(item, index) in product.otherImages" :key="index" :src="item" alt="product-image"
                @click="product.preview = item, highlightImages = index"
                class="sm:w-[80px] w-full h-[95%] sm:h-[5rem] rounded-lg shadow border-[2px] border-neutral-300 cursor-pointer opacity-[0.8]"
                :class="{ 'border-orange-700 opacity-[1] dark:border-yellow-700': highlightImages === index }">
        </div>
        <img :src="product?.preview" alt="product-image"
            class="order-0 sm:order-1 sm:w-[17rem] w-[20rem] sm:h-full h-[20rem] rounded-lg shadow border border-neutral-300 sm:m-0 m-auto"></img>
        <div class="order-2 flex flex-col gap-2">
            <h1 class="font-medium">{{ product?.name }}</h1>
            <h2 class="font-medium text-xl">${{ product?.price }}
                <span v-if="product.sale" class="text-sm text-red-700 px-[3px] py-px rounded-xs  bg-red-200">-{{
                    product?.sale }}%</span>
            </h2>
            <div>
                <h2 class="pb-2">colors: </h2>
                <div v-if="product.colors.length" class="w-full sm:w-8/12 flex flex-wrap items-center gap-2">
                    <div v-for="(item, index) in product.colors" :key="index" @click="highlight1 = index"
                        class="size-8 rounded border border-neutral-900 cursor-pointer" :class="[item,
                            { 'active': highlight1 === index }]" />
                </div>
                <div v-else class="text-red-700 flex items-center gap-1">
                    <p>Please select product colors</p>
                    <Icon name="fluent:important-24-regular" />
                </div>
            </div>
            <!-- --- -->
            <div>
                <h2 class="pb-2">sizes: </h2>
                <div v-if="product.sizes.length" class="flex items-center gap-2">
                    <div v-for="(item, index) in product.sizes" :key="index" @click="highlight2 = index"
                        class="border px-2 py-[2px] bg-neutral-200 dark:bg-neutral-600 text-orange-700 dark:text-neutral-100 font-semibold cursor-pointer"
                        :class="{ 'border-1 border-orange-700 dark:bg-neutral-700': highlight2 === index }">
                        {{ item }}</div>
                </div>
                <div v-else class="text-red-700 flex items-center gap-1">
                    <p>Please select product sizes</p>
                    <Icon name="fluent:important-24-regular" />
                </div>
            </div>
        </div>
    </div>
</template>
