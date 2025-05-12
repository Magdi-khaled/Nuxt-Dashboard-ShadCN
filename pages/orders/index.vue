<script setup lang="ts">
const { allOrderList } = useHelper();
const data = useMockOrders();
const { ordered, processing, delivering, pending, completed } = allOrderList(data.value);
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="flex items-start">
            <div class="grow">
                <h1>Orders</h1>
                <p class="capitalize text-sm">all your deliviry orders</p>
            </div>
        </header>
        <OrderTable :columns="orderColumns" :data="data" :show-filter="true"
            :orders-types="{ ordered, processing, pending, delivering, completed }" />
    </div>
</template>