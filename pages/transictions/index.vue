<script setup lang="ts">
const { generateRandomData } = useHelper();

const data = computed(() => generateRandomData(25));
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="flex items-start">
            <div class="grow">
                <p>All your transactions</p>
                <h1>Transactions</h1>
            </div>
        </header>
        <TableData :columns="columns" :data="data" />
    </div>
</template>