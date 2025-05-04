<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const { loading, open } = useHelper();
const tabs = ref([
    { value: 'Today', compenent: 'today' },
    { value: 'Week', compenent: 'this week' },
    { value: 'Month', compenent: 'this month' },
    { value: 'Year', compenent: 'this year' },
]);
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
]

const generateRandomValue = (number = 7) => {
    let values = [];
    for (let j = 0; j < number + 1; j++) {
        values.push(Math.floor(Math.random() * 100));
    }
    data.value = values;
    return values;
}

const setCategory = (e: any) => {
    let v = e.target.innerText.toLowerCase();
    currentCategory.value = v
    if (v === 'today') generateRandomValue(24);
    if (v === 'week') generateRandomValue(7);
    if (v === 'month') generateRandomValue(31);
    if (v === 'year') generateRandomValue(365);
}

onMounted(() => generateRandomValue(24))
</script>

<template>
    <div class="grid w-full gap-4">
        <header class="w-full flex items-center justify-between">
            <div class="">
                <p class="capitalize">hi, welcome back Magdi !</p>
                <h1>Dashboard</h1>
            </div>
            <ProductNew />
            <!-- <div class="h-10">
                <Button class="capitalize" @click="open = true">add new product</Button>
            </div> -->
        </header>
        <main class="grid gap-4 w-full">
            <Tabs default-value="Today" @click="setCategory" class="w-full">
                <TabsList class="max-w-[400px]">
                    <TabsTrigger v-for="(item, index) in tabs" :key="index" :value="item.value">
                        {{ item.value }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent v-for="(item, index) in tabs" :key="index" :value="item.value" class="w-full">
                    <!-- <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" /> -->
                    <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
                </TabsContent>
            </Tabs>
        </main>
        <footer>
            <div class="grid gap-4 lg:grid-cols-3 h-[300px]">
                <DCard v-for="(item, index) in cards" :key="index" :card="item" />
            </div>
        </footer>
    </div>
</template>