<script setup lang="ts">
const selectedItem = defineModel<string | number | string[]>('selectedItem', { default: [] });
const { clothSizes, shoeSizes } = useHelper();
const props = defineProps<{
    items: string[],
    placeHolder: string
    isColors?: boolean
    category?: string
    isServices?: boolean
}>();

watch(selectedItem, (currentSelection) => {
    if (Array.isArray(currentSelection)) {
        const sortedSelection = props.category !== 'shoes' ? [...currentSelection].sort(
            (a, b) => clothSizes.indexOf(a) - clothSizes.indexOf(b)) : [...currentSelection].sort(
                (a, b) => shoeSizes.indexOf(a) - shoeSizes.indexOf(b));
        if (JSON.stringify(sortedSelection) !== JSON.stringify(currentSelection)) {
            selectedItem.value = sortedSelection;
        }
    }
}, { deep: true });

const colorName = (col: string): string => {
    const colArr = col.split('-');
    let newColor = colArr[1];
    if (colArr[2] <= '600' && colArr[2] > '300') return newColor;
    else if (colArr[2] <= '900' && colArr[2] > '600') return 'Dark ' + newColor;
    return 'low ' + newColor;
};
const customizedText = (item: string) => item.split('-')[0] + ' ' + item.split('-')[1]; 
</script>

<template>
    <Select v-model="selectedItem">
        <SelectTrigger class="w-full capitalize">
            <SelectValue :placeholder="props.placeHolder" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem v-for="item, index in props.items" :key="index" :value="item">
                    <span v-if="!isColors && !isServices" class="capitalize"> {{ item }}</span>
                    <span v-else-if="isServices" class="capitalize">
                        {{ customizedText(item) }}</span>
                    <div v-else class="flex flex-wrap items-center gap-2">
                        <span class="w-8 h-4  rounded-xs border border-neutral-900 cursor-pointer" :class="item" />
                        <p class="capitalize">{{ colorName(item) }}</p>
                    </div>
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>