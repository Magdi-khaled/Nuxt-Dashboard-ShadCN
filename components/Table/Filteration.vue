<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
const { statuses } = useHelper();
const route = useRoute();
const props = defineProps<{ table: any }>();

const searchInput = ref<string>('');
const isSearching = ref<boolean>(false);

const triggerSearch = useDebounceFn((value: string) => {
    isSearching.value = false;
    const column = route.name === 'orders' ? props.table.getColumn('orderID') :
        props.table.getColumn('name');
    column?.setFilterValue(value);
}, 800);

watch(searchInput, (newVal) => {
    isSearching.value = true;
    triggerSearch(newVal);
});
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4">
        <label class="relative flex gap-2 items-center">
            <Icon v-if="!isSearching" name="fluent:box-multiple-search-20-regular" size="24"
                class="absolute left-2 opacity-[0.8]" />
            <Icon v-else name="eos-icons:bubble-loading" size="24" class="absolute left-2 opacity-[0.8]" />

            <Input v-if="route.name === 'orders'" id="searchInput" name="searchInput" class="pl-10 min-w-3xs text-sm"
                placeholder="Search by Order ID..." v-model="searchInput" />
            <Input v-else id="searchInput" name="searchInput" class="pl-10 min-w-2xs text-sm"
                placeholder="Search by Product Title..." v-model="searchInput" />
        </label>
        <label v-if="route.name === 'orders'" class="flex gap-2 items-center">
            <Select :model-value="table.getColumn('status')?.getFilterValue() as string"
                @update:model-value="table.getColumn('status')?.setFilterValue($event)">
                <SelectTrigger class="min-w-3xs">
                    <SelectValue class="capitalize" placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem v-for="status, index in statuses" :key="index" :value="status">
                            <span class="capitalize"> {{ status }}</span>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </label>
    </div>
</template>