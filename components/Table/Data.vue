<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef, SortingState, ColumnFiltersState } from '@tanstack/vue-table'
import { getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, useVueTable, FlexRender } from '@tanstack/vue-table';
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from '@/components/ui/table'
import { valueUpdater } from '../../lib/utils';
import type IOTypes from '~/types/useOTypes';

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    showFilter?: Boolean
    ordersTypes?: IOTypes
}>();
const router = useRouter();
const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);

const table = useVueTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
        get sorting() { return sorting.value },
        get columnFilters() { return columnFilters.value },
    },
});

const option = (row: any, type: number) =>
    type === 1 ? router.push(`/orders/${toRaw(row).orderID}`) :
        router.push(`/orders/edit/${toRaw(row).orderID}`);
</script>

<template>
    <div class="bg-background p-4 rounded-lg shadow-sm border w-full overflow-auto">
        <TablePreHeader :table="table" />
        <Table>
            <TableHeader>
                <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <TableHead v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan">
                        <div v-if="!header.isPlaceholder">
                            <FlexRender :render="header.column.columnDef.header" :props="header.getContext()" />
                        </div>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <template v-if="table.getRowModel().rows?.length">
                    <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
                        <TableCell v-for="cell, index in row.getVisibleCells()" :key="cell.id">
                            <FlexRender v-if="index !== 6" :render="cell.column.columnDef.cell"
                                :props="cell.getContext()" />
                            <div v-else class="flex items-center justify-center text-neutral-600 cursor-pointer">
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        class="flex items-center justify-center cursor-pointer hover:opacity-[0.75]">
                                        <Icon name="lucide:more-horizontal" size="19" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent side="bottom" align="end">
                                        <DropdownMenuItem @select="option(row.original, 1)">View</DropdownMenuItem>
                                        <DropdownMenuItem @select="option(row.original, 2)">Edit</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </TableCell>
                    </TableRow>
                </template>
                <template v-else>
                    <TableRow>
                        <TableCell :colSpan="props.columns.length" class="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                </template>
            </TableBody>
        </Table>

        <footer v-if="showFilter" class="flex flex-wrap text-xs font-medium items-center justify-between mt-2">
            <div class="capitalize text-neutral-500 flex flex-wrap items-center gap-[1px]">all orders
                (<p class="text-blue-600 text-xs">ordered: {{ ordersTypes?.ordered }}</p>/
                <p class="text-orange-700 text-xs">processing : {{ ordersTypes?.processing }}</p>/
                <p class="text-red-700 text-xs">pending: {{ ordersTypes?.pending }}</p>/
                <p class="text-cyan-700 text-xs">delivering: {{ ordersTypes?.delivering }}</p>/
                <p class="text-green-700 text-xs">completed: {{ ordersTypes?.completed }}</p>)
            </div>
            <TablePagination :table="table" class="sm:w-fit grow justify-end" />
        </footer>
    </div>
</template>
