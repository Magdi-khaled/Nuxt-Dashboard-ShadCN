<script setup lang="ts">
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRoute, useRouter, navigateTo } from '#app'

const items = reactive([
    { label: 'account', path: '/account', icon: 'lucide:bolt' },
    { label: 'logout', path: '/', icon: 'hugeicons:logout-04' },
])
const route = useRoute();
const { loading } = useHelper();

const handleLogout = async (e: Event) => {
    e.stopPropagation();
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await navigateTo('/login');
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger aria-role="button"
            class="flex items-center justify-center cursor-pointer hover:opacity-[0.75]">
            <Icon name="iconamoon:arrow-down-2-thin" size="30" />
        </DropdownMenuTrigger>

        <DropdownMenuContent class="absolute overflow-hidden"
            :class="{ 'right-[-12px]': route.name === 'index', 'bottom-[2.5rem] [--reka-popper-available-height:100px]': route.name !== 'index' }">

            <DropdownMenuItem class="p-0">
                <nuxt-link to="/account" class="w-full h-full p-2 capitalize flex items-center gap-2">
                    <Icon :name="items[0].icon" size="18" />
                    {{ items[0].label }}
                </nuxt-link>
            </DropdownMenuItem>

            <DropdownMenuItem class="w-full text-center p-0">
                <button v-if="!loading" class="cursor-pointer w-full h-full p-2 capitalize flex items-center gap-2"
                    @click="handleLogout">
                    <Icon :name="items[1].icon" size="18" />
                    {{ items[1].label }}
                </button>
                <Spinner v-else class="p-1 w-full flex justify-center" />
            </DropdownMenuItem>

        </DropdownMenuContent>
    </DropdownMenu>
</template>
