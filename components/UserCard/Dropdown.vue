<script setup lang="ts">
defineProps<{ show: Boolean }>();
const items = ref([
    { label: 'account', path: '/account', icon: 'lucide:bolt' },
    { label: 'logout', path: '/login', icon: 'hugeicons:logout-04' },
])
</script>

<template>
    <div v-show="show" class="border rounded-sm absolute z-10 w-full h-fit right-[4%] bottom-[-220%] bg-white dark:bg-background after:absolute after:size-3 after:transform after:rotate-44
        after:top-[-9%] after:right-[5%] after:z-[-1] after:bg-white dark:after:bg-background after:border-[1px] after:border-b-transparent
        after:border-r-transparent after:border-neutral-300">
        <ul class="grid items-start">
            <li v-for="(item, index) in items" :key="index"
                class="p-2 cursor-pointer capitalize flex items-center gap-2 font-medium hover:bg-neutral-100 hover:dark:bg-neutral-800 border-b">
                <Icon :name="item.icon" size="20" class="text-blend-darken" />
                {{ item.label }}
            </li>
        </ul>
    </div>
</template>