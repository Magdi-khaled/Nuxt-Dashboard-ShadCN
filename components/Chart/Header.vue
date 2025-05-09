<script setup lang="ts">
const props = defineProps<{
    title?: string
}>();
</script>

<template>
    <div class="flex items-center justify-between pb-2">
        <h2 class="capitalize font-semibold">Sales overtime</h2>
        <div class="flex items-center gap-2">
            <div class="flex items-center text-[#9D1DA8]">
                <Icon name="codicon:circle-small-filled" size="20" />
                <p class="capitalize">revenue</p>
            </div>
            <div class="flex items-center text-[#3E54C8]">
                <Icon name="codicon:circle-small-filled" size="20" />
                <p class="capitalize">order</p>
            </div>
            <span
                class="cursor-pointer bg-neutral-100 dark:bg-neutral-700 flex justify-center items-center p-[3px] rounded-xs hover:bg-neutral-200 transition">
                <Icon name="stash:burger-classic-duotone" size="20" />
            </span>
        </div>
    </div>
</template>