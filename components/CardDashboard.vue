<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type ICard from '@/types/useCard';

const props = defineProps<{ card: ICard }>();
</script>

<template>
    <Card v-if="props.card" class="py-4 px-1 cursor-grabbing">
        <CardHeader class="flex justify-between">
            <h2 class="text-lg font-semibold">{{ props.card.title }}</h2>
            <p
                class="w-[36px] h-[38px] flex items-center justify-center text-neutral-900 dark:text-neutral-200 bg-gray-100 dark:bg-neutral-800 rounded-sm">
                <Icon :name="props.card.icon" size="30" />
            </p>
        </CardHeader>
        <CardContent>
            <div class="text-[1.8rem]">
                <span class="font-[600]">{{ props.card.currency + '' + props.card?.amount }}</span>
            </div>
        </CardContent>
        <CardFooter class="flex items-center gap-2 font-medium">
            <p :class="props.card.progression > 0 ? 'text-green-600' : 'text-red-600'">
                <span v-if="props.card.progression > 0">+</span>{{ props.card?.progression }}%
            </p>
            <p class="capitalize">from {{ props.card.date }}</p>
        </CardFooter>
    </Card>
</template>