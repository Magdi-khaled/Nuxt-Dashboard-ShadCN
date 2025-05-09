<script setup lang="ts">
import type ICard from '~/types/useCard';

const { loading, open } = useHelper();
let data = ref<number[]>([]);

const cards: ICard[] = [
    {
        title: "Sales",
        progression: 12,
        amount: 1244.43,
        label: "View sales",
        description: "Sales of March 2024",
        icon: "solar:ticket-sale-outline"
    },
    {
        title: "Refunds",
        progression: 8,
        amount: 84.44,
        label: "View refunds",
        description: "Refunds since beginning of year",
        icon: "heroicons-outline:receipt-refund"
    },
    {
        title: "Payouts",
        progression: 14,
        amount: 899.99,
        label: "View payouts",
        description: "Payouts of this week",
        icon: "tabler:zoom-money"
    }
];
const generateRandomValue = (number = 7): void => {
    let values = [];
    for (let j = 0; j < number + 1; j++) {
        values.push(Math.floor(Math.random() * 100));
    }
    data.value = values;
};

onMounted(() => generateRandomValue(12));
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="w-full flex items-start justify-between">
            <div>
                <h1>Welcome back, <span class="font-semibold">Magdi !</span></h1>
                <p class="capitalize">here's your current sales overview</p>
            </div>
            <UserCard />
            <!-- <ProductNew /> -->
        </header>
        <main class="grid w-full gap-4">
            <Chart v-if="data.length > 0" :data="data" />
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DCard v-for='(item, index) in cards' :card="item" :key='index' />
            </div>
        </main>
        <!-- <footer>
        </footer> -->
    </div>
</template>