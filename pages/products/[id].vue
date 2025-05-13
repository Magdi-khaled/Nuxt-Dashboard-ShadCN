<script setup lang="ts">
const route = useRoute();

const data = useMockProducts();
const colors = ['bg-black', 'bg-cyan-800', 'bg-emerald-800', 'bg-pink-800', 'bg-purple-800']
const sizes = ['XL', 'L', 'M', 'SM', 'XS']
const product = computed(() => data.value.find(v => v.productID === route.params.id));
</script>

<template>
    <div class="h-full sm:h-[94dvh]">
        <h1 class="capitalize font-medium mb-4 border-b border-b-neutral-400 w-fit">product preview</h1>
        <div class="bg-background p-4 border rounded-lg shadow-sm">
            <ProductPreview :product="product" :colors="colors" :sizes="sizes" />
            <p class="text-neutral-600 font-medium w-full text-end sm:pt-0 pt-2">
                Product ID: #{{ route.params.id }}</p>
        </div>
    </div>
</template>
