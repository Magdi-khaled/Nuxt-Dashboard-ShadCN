<script setup lang="ts" async>

const data = await useMockProducts();
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="flex items-start">
            <div class="grow">
                <h1>Products</h1>
                <p class="capitalize text-sm">all your stock products</p>
            </div>
        </header>
        <ProductTable :data="data" :columns="productColumns" />
    </div>
</template>