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

// Register only the needed chart types to keep bundle small
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend)

const props = defineProps<{
    chartData: any
    chartOptions?: any
    title?: string
}>();
</script>

<template>
    <div class="rounded-2xl border p-6 shadow-sm">
        <div v-if="title" class="mb-4 text-lg font-semibold">
            {{ title }}
        </div>
        <div class="h-[300px]">
            <Line :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>
