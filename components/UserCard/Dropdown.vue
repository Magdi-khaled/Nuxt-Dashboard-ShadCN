<script setup lang="ts">
defineProps<{ show: Boolean }>();
const items = ref([
    { label: 'account', path: '/account', icon: 'lucide:bolt' },
    { label: 'logout', path: '/login', icon: 'hugeicons:logout-04' },
]);

</script>

<template>
    <div v-show="show"
        class="w-[200px] border border-neutral-400 rounded-sm overflow-hidden absolute z-10 h-fit right-[0%] bottom-[-200%] bg-white dark:bg-background">
        <ul class="grid items-start">
            <li v-for="(item, index) in items" :key="index">
                <NuxtLink :to="item.path" class="text-sm sm:text-[16px] flex items-center gap-2 p-2 cursor-pointer capitalize font-medium hover:bg-neutral-100
                    hover:dark:bg-neutral-800 border-b">
                    <Icon :name="item.icon" size="18" class="text-blend-darken" />
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>