<script setup>
const props = defineProps(['data']);

// const categories = ref({
//     today: [
//         "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
//         "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
//     week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     month: [],
//     year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// });

const colorMode = useColorMode();

import ChartLine from '@/components/ui/chart-line/ChartLine.vue';
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Sales',
            backgroundColor: colorMode.preference === 'dark' ? '#fff' : '#1e1e1e',
            width: '8px',
            borderColor: colorMode.preference === 'dark' ? "#fafafa" : '#1e1e1e',
            // data: [120, 90, 200, 250, 220, 179, 150, 180, 150, 280, 150, 180],
            data: props.data,
            fill: false,
            tension: 0.5,
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: "index",
        intersect: false,
    },
    line: {
        width: '2px'
    },
    scales: {
        y: {
            grid: {
                display: false,
            },
            display: true,
            beginAtZero: true,
        },
        x: {
            grid: {
                display: false,
            },
            display: true,
        },
    },
    Legend: {
        color: '#fff'
    },
    plugins: {
        title: {
            display: false,
            text: "Product Sales",
        },
    },
};
</script>

<template>
    <div>
        <ChartLine :chartData="data" :chartOptions="chartOptions" />
    </div>
</template>