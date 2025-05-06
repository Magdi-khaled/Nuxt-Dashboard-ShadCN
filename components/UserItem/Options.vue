<script setup lang="ts">
defineProps<{ show: Boolean }>();
</script>

<template>
    <div v-if="show" class="border-2 p-2 rounded-lg absolute w-full h-fit left-0 top-[-105%] bottom-[2] bg-white dark:bg-background after:absolute after:size-3 after:transform after:rotate-44
        after:bottom-[-9%] after:right-[7%] after:z-[10] after:bg-white dark:after:bg-background after:border-[1px] after:border-t-transparent
        after:border-l-transparent after:border-neutral-300">
        <ul class="grid items-start gap-2">
            <li
                class="cursor-pointer flex items-center gap-2 font-medium hover:bg-neutral-100 hover:dark:bg-neutral-800">
                <Icon name="lucide:bolt" size="20" class="text-green-500" />
                Account
            </li>
            <li
                class="cursor-pointer flex items-center gap-2 font-medium hover:bg-neutral-100 hover:dark:bg-neutral-800">
                <Icon name="hugeicons:logout-04" size="20" class="text-red-500" />
                Logout
            </li>
        </ul>
    </div>
</template>