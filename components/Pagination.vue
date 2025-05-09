<script lang="ts" generic="TData, TValue">
import { Button } from '@/components/ui/button'


</script>

<template>
    <div>
        <div class="border rounded-md">
            <Table>
                { // .... }
            </Table>
        </div>
        <div class="flex items-center justify-end py-4 space-x-2">
            <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
                Previous
            </Button>
            <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
                Next
            </Button>
        </div>
    </div>
</template>