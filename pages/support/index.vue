<script setup lang="ts">
const searchText = ref('');
const items = ref([
    {
        title: 'about products',
        list: ['How to Add product', 'How to Edit product', 'How to find product', 'Other products issue'],
        icon: 'fluent-mdl2:product-variant'
    },
    {
        title: 'about orders',
        list: ['How to track order', 'Issue with customer\'s order', 'Other order issue',],
        icon: 'ic:outline-delivery-dining'
    },
    {
        title: 'about services',
        list: ['Issue while adding product', 'Issue with dashboard status', 'issue about services', 'Other service issue'],
        icon: 'material-symbols:home-repair-service-outline-rounded'
    },
    {
        title: 'Others',
        list: ['Issue while adding product', 'Issue with ', 'other issue about services'],
        icon: 'pajamas:issue-type-maintenance'
    },
]);
</script>

<template>
    <div class="h-full sm:h-[94dvh]">
        <header class="my-8">
            <h1 class="text-center font-semibold">Welcome, How can I help you?</h1>
            <div class="w-11/12 sm:w-4/12 m-auto my-4 relative">
                <label for="search">
                    <Icon name="tabler:shield-search" size="20"
                        class="absolute top-[25%] left-2 text-neutral-700 dark:text-neutral-200" />
                    <Input id="search" placeholder="What's you question ?" class="pl-8" v-model="searchText" />
                </label>
            </div>
        </header>
        <main>
            <div class="w-10/12 sm:w-6/12 grid sm:grid-cols-2 grid-cols-1 gap-2 m-auto">
                <div v-for="(item, index) in items" :key="index" class="bg-background border-[1px] px-4 py-3 shadow rounded-lg hover:border-neutral-600
                    dark:hover:border-neutral-100 transition duration-200">
                    <div class="flex items-center gap-2">
                        <Icon :name="item.icon" size="20" class="opacity-90" />
                        <h1 class="text-lg capitalize font-medium border-b pb-px w-fit">{{ item.title }}</h1>
                    </div>
                    <ul class="pl-8 w-fit list-disc opacity-80 text-sm my-1">
                        <li v-for="(val, index) in item.list" :key="index">
                            <nuxt-link to="/" class="hover:underline transition duration-150">
                                {{ val }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>