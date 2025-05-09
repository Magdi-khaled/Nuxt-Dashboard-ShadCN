<script setup lang="ts">
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend)

const props = defineProps<{
    chartData: any
    chartOptions?: any
    title?: string
}>();
</script>

<template>
    <div class="rounded-lg border p-4 shadow-sm bg-white dark:bg-background">
        <div v-if="title" class="mb-4 text-lg font-semibold">
            {{ title }}
        </div>
        <div class="h-[300px]">
            <Line :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>
