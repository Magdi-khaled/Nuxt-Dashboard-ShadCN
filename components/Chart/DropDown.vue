<script setup lang="ts">
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const props = defineProps<{
    items: string[]
}>();
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="flex items-center justify-center cursor-pointer hover:opacity-[0.75]">
            <Icon name="stash:burger-classic-duotone" size="20" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="absolute right-[-12px]">
            <DropdownMenuItem v-for="(item, index) in items" :key="index">
                {{ item }}</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>