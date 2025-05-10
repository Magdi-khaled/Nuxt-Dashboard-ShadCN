<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { statuses } = useHelper();

defineProps(['table']);
</script>

<template>
    <div class="flex flex-wrap sm:flex-nowrap grow items-center justify-between pb-2 border-b">
        <h2 v-if="route.name !== 'orders'">latest orders</h2>
        <TableFilteration v-else :table="table" />
        <div class="flex gap-2 w-full sm:w-fit justify-end">
            <Button variant="outline">Customize</Button>
            <!-- <Button variant="ghost">Filter</Button> -->
            <Button variant="ghost">Export</Button>
        </div>
    </div>
</template>