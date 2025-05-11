<script setup lang="ts">
import { getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, useVueTable, FlexRender } from '@tanstack/vue-table';
const route = useRoute();

const data = useMockOrders();
const order = computed(() => data.value.find(v => v.orderID === route.params.id));

const table = useVueTable({
    data: order.value ? [order.value] : [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
});
</script>

<template>
    <div class="w-full overflow-auto flex flex-col gap-8 my-6 h-[87dvh]">
        <h1 class="capitalize font-semibold w-fit text-neutral-600 dark:text-neutral-300 text-lg sm:text-[28px]">
            tracking shipment order: #{{ route.params.id }}</h1>

        <OrderShipment :status="order?.status" />

        <div class="bg-background p-4 rounded-lg shadow-sm border">
            <Table>
                <TableHeader>
                    <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                        <TableHead v-for="header, index in headerGroup.headers" :key="header.id"
                            :colSpan="header.colSpan">
                            <div v-if="!header.isPlaceholder">
                                <FlexRender v-if="index !== 6" :render="header.column.columnDef.header"
                                    :props="header.getContext()" />
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
                        <TableCell v-for="cell, index in row.getVisibleCells()" :key="cell.id">
                            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    </div>
</template>