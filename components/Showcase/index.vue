<script setup lang="ts">
import type IProductCard from '~/types/useProductCard';

const items = reactive<IProductCard[]>([
    { title: 'Red Tape Sports Shoes for Men', path: '/media/products/shoe.png', stock: 135, sales: 120 },
    { title: 'Fastrack FS1 Pro Smartwatch', path: '/media/products/watch.png', stock: 76, sales: 157 },
    { title: 'Leriya Fashion Men\'s Shirt', path: '/media/products/shirt.png', stock: 465, sales: 235 },
]);
</script>

<template>
    <div class="rounded-lg border p-4 shadow-xs bg-white dark:bg-background">
        <ShowcaseHeader />
        <div class="grid gap-y-4">
            <ShowcaseCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
    </div>
</template>