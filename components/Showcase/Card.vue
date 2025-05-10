<script setup lang="ts">
import type IProductCard from '~/types/useProductCard';

const props = defineProps<{ item: IProductCard }>();
</script>

<template>
    <div class="flex items-center gap-4">
        <img :src="item.path" alt="Product Image" class="w-[65px] h-fit rounded-full">
        <div class="flex-1">
            <div class="flex justify-between mb-[2px]">
                <p class="capitalize font-semibold sm:text-[15px] text-sm">{{ item.title }}</p>
                <p class="flex capitalize"
                    :class="{ 'text-green-700': item.stock > 0, 'text-red-700': item.stock <= 0 }">
                    <Icon name="fluent:circle-small-20-filled" size="20" />
                    <span v-if="item.stock > 0">available</span>
                    <span v-else>Currently unavailable</span>
                </p>
            </div>
            <div class="w-full flex justify-between capitalize text-neutral-600 dark:text-neutral-400">
                <p class="text-xs">{{ item.sales }} sales</p>
                <p class="text-xs">{{ item.stock }} stocks remaining</p>
            </div>
        </div>
    </div>
</template>