<script setup lang="ts">
const props = defineProps<{ title?: string }>();
const show = ref(false);
const items = reactive<string[]>(['Average', 'Refunds', 'Profit']);

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
            <div class="relative flex items-center justify-center">
                <ChartDropDown :items="items" />
            </div>
        </div>
    </div>
</template>