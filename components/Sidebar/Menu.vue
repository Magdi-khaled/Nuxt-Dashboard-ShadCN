<script setup>
const route = useRoute();
const router = useRouter();
const items = ref([
    { title: 'Overview', path: '/', icon: 'ic:outline-dashboard' },
    { title: 'Services', path: '/services', icon: 'material-symbols:home-repair-service-outline-sharp' },
    { title: 'Products', path: '/products', icon: 'fluent:box-24-regular' },
    { title: 'Orders', path: '/orders', icon: 'lets-icons:box-alt' },
    { title: 'Shipment', path: '/orders/shipment', icon: 'tdesign:compass' },
    { title: 'Account', path: '/account', icon: 'lucide:bolt' },
    { title: 'Contacts', path: '/contacts', icon: 'lucide:square-user-round' },
    { title: 'Settings', path: '/settings', icon: 'mdi:settings-outline' },
    { title: 'Help & Support', path: '/support', icon: 'ph:question-bold' }
]);
const { open } = useHelper();
</script>

<template>
    <div class="w-full">
        <header class="cursor-pointer w-full flex items-center justify-between p-4">
            <div class="flex items-center gap-4" @click="router.push({ name: 'index' })">
                <Logo />
                <p class="font-medium text-xl text-black dark:text-neutral-50">Novanest</p>
            </div>
            <Theme class="hidden lg:block" />
        </header>
        <nav class="pl-4 grow">
            <ul class="grid gap-2">
                <li v-for="(item, index) in items" :key="index">
                    <NuxtLink :to="item.path" @click="open = false"
                        class="flex items-center gap-2 cursor-pointer font-medium hover:bg-neutral-100 hover:dark:text-neutral-800 px-2 py-1"
                        :class="{
                            'bg-neutral-300 hover:bg-neutral-300 dark:bg-[#2e2e2e] hover:dark:text-white':
                                route.name === item.title.toLowerCase() || route.name === 'index' && index === 0
                        }">
                        <Icon :name="item.icon" size="20" />
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>