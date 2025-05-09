<script setup lang="ts">
defineProps(['table']);

const status = ['completed', 'processing', 'pending'];
</script>

<template>
    <div class="grid grid-cols-4 gap-4 items-center p-4">
        <label class="col-span-1 relative flex gap-2 items-center">
            <Icon name="lets-icons:search-duotone" size="20" class="absolute left-2 opacity-[0.8]" />
            <Input class="pl-8 max-w-sm" placeholder="Search by email..."
                :model-value="table.getColumn('email')?.getFilterValue() as string"
                @update:model-value=" table.getColumn('email')?.setFilterValue($event)" />
        </label>
        <label class="col-span-2 w-full flex gap-2 items-center">
            <Select :model-value="table.getColumn('status')?.getFilterValue() as string"
                @update:model-value="table.getColumn('status')?.setFilterValue($event)">
                <SelectTrigger>
                    <SelectValue class="capitalize" placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem v-for="status, index in status" :key="index" :value="status">
                            <span class="capitalize"> {{ status }}</span>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </label>
    </div>
</template>