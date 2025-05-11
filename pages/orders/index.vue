<script setup lang="ts">
const { allOrderList } = useHelper();
const data = useMockOrders();
const { completed, processing, pending } = allOrderList(data.value);
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="flex items-start">
            <div class="grow">
                <h1>Orders</h1>
                <p class="capitalize text-sm">all your deliviry orders</p>
            </div>
        </header>
        <TableData :columns="columns" :data="data" :show-filter="true"
            :orders-types="{ completed, processing, pending }" />
    </div>
</template>