<script setup lang="ts">
import ChartLine from '@/components/ui/chart-line/ChartLine.vue';
const props = defineProps<{ revenueData: number[], ordersData: number[], }>();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth = new Date(Date.now()).getMonth();

const colorMode = useColorMode();
const generateLabels = (): string[] => {
    let labels: string[] = [];
    for (let i = currentMonth; i < months.length; i++) labels.push(months[i]);
    return labels;
}
const chartJSData = computed(() => {
    return {
        labels: generateLabels(),
        datasets: [
            {
                backgroundColor: '#9D1DA8',
                width: '8px',
                borderColor: '#9D1DA8',
                data: props.revenueData.slice(currentMonth),
                fill: false,
                tension: 0.4,
                pointRadius: 0,
            }, {
                backgroundColor: '#3E54C8',
                width: '8px',
                borderColor: '#3E54C8',
                data: props.ordersData.slice(currentMonth),
                fill: false,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };
});

const chartOptions = computed(() => {
    const tickColor = colorMode.preference !== 'dark' ? '#1e1e1e' : '#fff';
    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false, },
        line: { width: '2px' },
        scales: {
            y: {
                grid: { display: false, drawBorder: false, },
                display: true,
                beginAtZero: true,
                ticks: { color: tickColor },
            },
            x: {
                grid: { display: false, drawBorder: false, },
                ticks: { color: tickColor },
                display: true,
            },
        },
        plugins: {
            title: { display: false, },
            legend: { display: false, },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        const value = context.parsed.y;
                        const datasetIndex = context.datasetIndex;
                        if (datasetIndex === 0) return `Revenue: $${value}`;
                        else return `Orders: $${value}`;
                    },
                },
            }
        },
    }
});
</script>

<template>
    <div>
        <ChartLine :chartData="chartJSData" :chartOptions="chartOptions" />
    </div>
</template>