<script setup lang="ts">
interface IAProduct {
    preview: string;
    otherImages: string[];
    name: string;
    description: string;
    price: number | null;
    sale: number | null;
    quantity: number | null;
    category: string;
    colors: string[];
    sizes: string[];
}
const props = defineProps<{ product: IAProduct }>();

const price = computed(() => typeof props.product.price === 'number' ?
    (props.product.price - (props.product.price * props.product.sale / 100)) : 0)
const highlightImages = ref(0);
const highlight1 = ref(0);
const highlight2 = ref(0);
</script>

<template>
    <div
        class="col-span-3 sm:col-span-1 md:col-span-1 grid grid-col-3 sm:grid-cols-1 gap-x-4 gap-y-2 p-4 bg-background rounded-lg shadow-sm border">
        <h2 class="border-b w-fit"> preview</h2>
        <div v-if="!product?.preview" class="cursor-grab w-full h-[18rem] lg:h-[20rem] text-neutral-500
            rounded-lg shadow border-[2px] border-dashed border-neutral-500 flex items-center justify-center">
            <Icon name="hugeicons:image-add-01" size="30" />
            <p>Product Image</p>
        </div>
        <img v-else :src="product?.preview"
            class="sm:w-full w-[20rem] h-full sm:h-[20rem] rounded-lg shadow border border-neutral-300 m-auto">
        <!-- --- -->
        <div class="w-full h-[6rem] flex items-center justify-between gap-2 overflow-y-auto">
            <template v-if="props.product.otherImages.length">
                <img v-for="(item, index) in product.otherImages" :key="index" :src="item"
                    :alt="`product-image-${index}`" @click="product.preview = item, highlightImages = index"
                    class="sm:w-[80px] w-full h-[95%] sm:h-[5rem] rounded-lg shadow border-[2px] border-neutral-300 cursor-pointer opacity-[0.8]"
                    :class="{ 'border-orange-700 opacity-[1] dark:border-yellow-700': highlightImages === index }">
            </template>
            <template v-else>
                <div v-for="(item, index) in 4" :key="index" :src="item" :alt="`product-image-${index}`" class="sm:w-[80px] w-full h-[95%] sm:h-[5rem] rounded-lg shadow  border-dashed border-[2px]
                border-neutral-500 cursor-pointer opacity-[0.8] px-2 flex flex-col items-center justify-center">
                    <Icon name="hugeicons:image-add-01" size="20" />
                    <p class="text-xs text-center">Alternative Image</p>
                </div>
            </template>
        </div>
        <!-- --- -->
        <div class="flex flex-col gap-2">
            <h2 class="font-medium text-[20px]">{{ product?.name }}</h2>
            <h2 v-if="!props.product.price" class="text-neutral-600 border-2 w-full rounded px-1 py-1">Product price
            </h2>
            <h2 v-else class="font-medium">
                <span v-if="price" class="text-xl pr-2">${{ price }}</span>
                <span v-if="product.sale" class="text-sm text-red-700 px-[3px] py-px rounded-xs bg-red-200">
                    -{{ product?.sale }}%</span>
            </h2>
            <!-- ---- -->
            <h2 v-if="!product.description" class="text-neutral-600 border-2 w-full rounded px-1 py-1">Product
                description</h2>
            <h3 v-else class="text-neutral-600">{{ product.description }}</h3>
            <!-- ---- -->
            <div>
                <h2 class="pb-2">colors: </h2>
                <h2 v-if="!product.colors.length" class="text-neutral-600 border-2 w-full rounded px-1 py-1">Product
                    colors</h2>
                <div v-else class="w-full flex flex-wrap items-center gap-2">
                    <div v-for="(item, index) in product.colors" :key="index" @click="highlight1 = index"
                        class="size-8 rounded border border-neutral-900 cursor-pointer" :class="[item,
                            { 'active': highlight1 === index }]" />
                </div>
            </div>
            <!-- --- -->
            <div>
                <h2 class="pb-2">sizes: </h2>
                <h2 v-if="!product.sizes.length" class="text-neutral-600 border-2 w-full rounded px-1 py-1">Product
                    size</h2>
                <div v-else class="flex items-center gap-2">
                    <div v-for="(item, index) in product.sizes" :key="index" @click="highlight2 = index"
                        class="border px-2 py-[2px] bg-neutral-200 dark:bg-neutral-600 text-orange-700 dark:text-neutral-100 font-semibold cursor-pointer"
                        :class="{ 'border-1 border-orange-700 dark:bg-neutral-700': highlight2 === index }">
                        {{ item }}</div>
                </div>
            </div>
        </div>
    </div>
</template>