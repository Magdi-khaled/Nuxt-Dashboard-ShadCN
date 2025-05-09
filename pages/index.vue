<script setup lang="ts">
const { generateRandomValue } = useHelper();
const isClicked = ref<number>(0);
const orderData = computed<number[]>(() => generateRandomValue(12));
const revenueData = computed<number[]>(() => generateRandomValue(12));

</script>

<template>
    <div class="grid w-full gap-4">
        <header class="w-full flex items-start justify-between">
            <div>
                <h1>Welcome back, <span class="font-semibold">Magdi !</span></h1>
                <p class="capitalize text-neutral-600 dark:text-neutral-100">here's your current sales overview</p>
            </div>
            <UserCard />
        </header>
        <main class="grid w-full gap-6">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CardDashboard v-for='(item, index) in cards' :card="item" :key='index' @click="isClicked = index"
                    :class="{ 'bg-[#1e1e1e] dark:bg-neutral-800 text-primary-foreground dark:text-primary': isClicked === index }" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Chart v-if="orderData.length > 0 && revenueData.length > 0" :orders-data="orderData"
                    :revenue-data="revenueData" />
                <!-- <Chart v-if="data.length > 0" :data="data" /> -->
            </div>
        </main>
    </div>
</template>