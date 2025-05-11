<script setup lang="ts">
const props = defineProps<{ table: any }>();
</script>

<template>
    <div class="flex items-center justify-end py-4 gap-4">
        <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
            <Icon name="mingcute:left-fill" size="20" />
        </Button>
        <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
            <Icon name="mingcute:right-fill" size="20" />
        </Button>
    </div>
</template>