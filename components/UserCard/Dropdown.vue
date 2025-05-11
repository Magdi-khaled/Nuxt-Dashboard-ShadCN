<script setup lang="ts">
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const items = reactive([
    { label: 'account', path: '/account', icon: 'lucide:bolt' },
    { label: 'logout', path: '/login', icon: 'hugeicons:logout-04' },
]);

</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger aria-role="button" class="flex items-center justify-center cursor-pointer hover:opacity-[0.75]">
            <Icon name="iconamoon:arrow-down-2-thin" size="30" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="absolute right-[-12px]">
            <DropdownMenuItem v-for="(item, index) in items" :key="index" class="p-0">
                <nuxt-link :to="item.path" class="w-full h-full p-2 capitalize flex items-center gap-2">
                    <Icon :name="item.icon" size="18" />
                    {{ item.label }}
                </nuxt-link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>