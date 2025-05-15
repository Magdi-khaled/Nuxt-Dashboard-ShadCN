<script setup lang="ts">
const route = useRoute();

const data = useMockProducts();
const product = computed(() => data.value.find(v => v.productID === route.params.id));
</script>

<template>
    <div class="h-full sm:h-[94dvh]">
        <h1 class="capitalize font-medium mb-4 border-b border-b-neutral-400 w-fit">product preview</h1>
        <div class="bg-background p-4 border rounded-lg shadow-sm">
            <ProductPreview :product="product" />
            <p class="text-neutral-600 dark:text-neutral-300 font-medium w-full text-end sm:pt-0 pt-2">
                Product ID: #{{ route.params.id }}</p>
        </div>
    </div>
</template>
