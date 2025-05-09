<script setup>
const props = defineProps(['currentCategory', 'data']);

let categories = ref({
    today: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month: [],
    year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
});

const generateMonth = () => {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    function generateMonthDates() {
        let monthDates = [];
        let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        console.log(daysInMonth);
        for (let i = 1; i <= daysInMonth; i++) {
            let dayString = ("0" + i).slice(-2);
            let monthString = ("0" + currentMonth).slice(-2);
            monthDates.push(monthString + "/" + dayString);
        }
        console.log(monthDates);
        return monthDates;
    }
    let month = generateMonthDates();
    categories.value = { ...categories.value, month };
    return month;
};
watch(() => props.currentCategory, (newVal) => { console.log(newVal); });

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
            data: [120, 90, 200, 250, 220, 179, 150, 180, 150, 280, 150, 180],
            fill: false,
            tension: 0.4,
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
            display: true,
            beginAtZero: true,
        },
        x: {
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
onMounted(() => {
    generateMonth();
});
</script>

<template>
    <div>
        <ChartLine :chartData="data" :chartOptions="chartOptions" />
    </div>
</template>