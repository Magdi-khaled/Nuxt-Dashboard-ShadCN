<script setup lang="ts">
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const props = defineProps({ card: Object });
</script>

<template>
    <Card v-if="props.card">
        <CardHeader class="px-4 pt-4 pb-2">
            <div class="flex items-center justify-between">
                <CardTitle>{{ props.card?.title }}</CardTitle>
                <Badge class="bg-green-400">+{{ props.card?.progression }}%</Badge>
            </div>
        </CardHeader>
        <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
            <div class="text-[44px] font-[800]">
                <span class="text-neutral-600">$</span>
                <span class="text-black">{{ props.card?.amount }}</span>
            </div>
        </CardContent>
        <CardFooter class="flex items-center justify-between gap-2 px-2 py-2">
            <div class="flex items-center justify-center w-8 h-8 rounded bg-neutral-100">
                <Icon size="20" :name="props.card?.icon" color="black" />
            </div>
            <p class="text-xs grow">{{ props.card?.description }}</p>
            <Button variant="outline">{{ props.card?.label }}</Button>
        </CardFooter>
    </Card>
</template>