<script setup lang="ts">
const route = useRoute();

const data = useMockProducts();
const colors = ['bg-black', 'bg-cyan-800', 'bg-emerald-800', 'bg-pink-800', 'bg-purple-800']
const sizes = ['XL', 'L', 'M', 'SM', 'XS']
const product = computed(() => data.value.find(v => v.productID === route.params.id));
const highlightImages = ref(0);
const highlight1 = ref(0);
const highlight2 = ref(0);
</script>

<template>
    <div class="h-full sm:h-[94dvh]">
        <h1 class="capitalize font-medium mb-4 border-b border-b-neutral-400 w-fit">product preview</h1>
        <div class="bg-background p-4 border rounded-lg shadow-sm">
            <div class="flex flex-wrap items-start gap-6">
                <div class="grid grid-cols-4 sm:grid-cols-1 gap-2 order-1 sm:order-0">
                    <img v-for="(item, index) in 4" :key="index" :src="product?.preview" alt="product-image"
                        @click="highlightImages = index"
                        class="sm:w-[4rem] w-full h-[95%] sm:h-full rounded-lg shadow border-[2px] border-neutral-300 cursor-pointer opacity-[0.8]"
                        :class="{ 'border-orange-700 opacity-[1] dark:border-yellow-700': highlightImages === index }">
                </div>
                <img :src="product?.preview" alt="product-image"
                    class="order-0 sm:order-1 sm:w-[17rem] w-[20rem] sm:h-full h-[20rem] rounded-lg shadow border border-neutral-300 sm:m-0 m-auto">
                <div class="order-2 grid gap-2">
                    <h1 class="font-medium">{{ product?.product }}</h1>
                    <h2 class="font-medium text-xl">${{ product?.price }}</h2>
                    <h2>colors: </h2>
                    <div class="flex items-center gap-2">
                        <div v-for="(item, index) in colors" :key="index" @click="highlight1 = index"
                            class="size-8 rounded border border-neutral-900 cursor-pointer" :class="[item,
                                { 'active': highlight1 === index }]" />
                    </div>
                    <h2>sizes: </h2>
                    <div class="flex items-center gap-2">
                        <div v-for="(item, index) in sizes" :key="index" @click="highlight2 = index"
                            class="border px-2 py-[2px] bg-neutral-200 dark:bg-neutral-600 text-orange-700 dark:text-neutral-100 font-semibold cursor-pointer"
                            :class="{ 'border-1 border-orange-700 dark:bg-neutral-700': highlight2 === index }">
                            {{ item }}</div>
                    </div>
                </div>
            </div>
            <p class="text-neutral-600 font-medium w-full text-end sm:pt-0 pt-2"> Product ID: #{{ route.params.id }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.active {
    position: relative;
}

.active::after {
    content: '';
    position: absolute;
    top: 45%;
    left: 24%;
    width: 4px;
    height: 8px;
    border-radius: 20%;
    background-color: white;
}

.active::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 46%;
    width: 4px;
    height: 20px;
    transform: rotate(50deg);
    border-radius: 25%;
    background-color: white;
}
</style>