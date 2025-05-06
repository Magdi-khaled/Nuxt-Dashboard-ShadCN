<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type ICard from '~/types/useCard';

const { loading, open } = useHelper();
const tabs = ref(['Today', 'Week', 'Month', 'Year']);
let currentCategory = ref("today");
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

const setCategory = (e: any) => {
    let v = e.target.innerText.toLowerCase();
    currentCategory.value = v;
    if (v === 'today') generateRandomValue(24);
    if (v === 'week') generateRandomValue(6);
    if (v === 'month') generateRandomValue(30);
    if (v === 'year') generateRandomValue(11);
};

onMounted(() => generateRandomValue(24));
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="w-full flex items-start justify-between">
            <div class="grid grid-cols-2 items-center gap-2">
                <p class="capitalize col-span-2">hi, welcome back Magdi !</p>
                <h1 class="">Dashboard</h1>
            </div>
            <ProductNew />
        </header>
        <main class="grid w-full gap-4">
            <Tabs default-value="Today" class="w-full">
                <TabsList class="max-w-[400px]">
                    <TabsTrigger v-for="item, index in tabs" :key="index" :value="item" @click="setCategory">
                        {{ item }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent class="w-[100%]" v-for="item, index in tabs" :key="index" :value="item">
                    <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <DCard v-for='(item, index) in cards' :card="item" :key='index' />
            </div>
        </footer>
    </div>
</template>