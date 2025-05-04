<script setup>
const items = ref([
    { title: 'Overview', path: '/', icon: 'ic:outline-dashboard' },
    { title: 'Transictions', path: '/transictions', icon: 'akar-icons:arrow-right-left' },
    { title: 'Account', path: '/account', icon: 'lucide:bolt' },
    { title: 'Contacts', path: '/contacts', icon: 'lucide:square-user-round' },
    { title: 'Settings', path: '/settings', icon: 'mdi:settings-outline' }
])
</script>

<template>
    <div class="w-full overflow-hidden">
        <header class="cursor-pointer w-fit flex items-center gap-2 p-4 transform hover:scale-[101%] transition">
            <Logo />
            <p class="font-bold capitalize text-black">nuxt-finance</p>
        </header>
        <nav class="pl-4 grow">
            <ul class="grid gap-2">
                <NuxtLink :to="item.path" v-for="(item, index) in items" :key="index"
                    class="flex items-center gap-2 cursor-pointer font-medium hover:bg-neutral-100 px-2 py-1">
                    <Icon :name="item.icon" size="20" />
                    {{ item.title }}
                </NuxtLink>
            </ul>
        </nav>
        <footer class="p-4">
            @copyright 2025
        </footer>
    </div>
</template>