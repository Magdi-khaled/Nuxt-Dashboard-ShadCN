<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef, ColumnFiltersState } from '@tanstack/vue-table'
import { getCoreRowModel, getPaginationRowModel, getFilteredRowModel, useVueTable, FlexRender } from '@tanstack/vue-table';
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from '@/components/ui/table'
import { valueUpdater } from '../../lib/utils';
import type IProduct from '~/types/useProduct';

const props = defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    showFilter?: Boolean
}>();
const router = useRouter();
const columnFilters = ref<ColumnFiltersState>([]);

const table = useVueTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    getFilteredRowModel: getFilteredRowModel(),
    state: { get columnFilters() { return columnFilters.value }, },
});
const modalValue = ref<boolean>(false);
const selectedProduct = ref({});

const option = (row: any, type: number) =>
    type === 1 ? router.push(`/products/${toRaw(row).productID}`) : type === 2 ?
        router.push(`/products/edit/${toRaw(row).productID}`) : (selectedProduct.value = row, modalValue.value = true);
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
                            <FlexRender v-if="index !== 7" :render="cell.column.columnDef.cell"
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
                                        <DropdownMenuItem @select="option(row.original, 3)" class="text-red-600">Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <ProductDeleteModal v-model:isModalValue="modalValue"
                                    :product="selectedProduct as IProduct" />
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
        <Pagination :table="table" />
    </div>
</template>