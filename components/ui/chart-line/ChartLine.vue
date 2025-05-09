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
    <div class="rounded-lg border p-4 shadow-xs bg-white dark:bg-background">
        <ChartHeader :title="props.title" />
        <div class="h-[260px]">
            <Line :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>
