<script setup lang="ts">
const props = defineProps<{
    status?: string
}>();
const items = [
    { title: "confirmed order", icon: "mingcute:task-line" },
    { title: "processing order", icon: "hugeicons:package-process" },
    { title: "quality check", icon: "fluent:box-search-16-regular" },
    { title: "dispatched item", icon: "hugeicons:delivery-truck-01" },
    { title: "product deliverd", icon: "hugeicons:package-delivered" }
];
const currentProcess = ref(0);
const getProcess = () => {
    if (props.status === 'processing') currentProcess.value = 1;
    else if (props.status === 'pending') currentProcess.value = 2;
    else if (props.status === 'delivering') currentProcess.value = 3;
    else if (props.status === 'completed') currentProcess.value = 4;
}
onMounted(() => getProcess());
</script>

<template>
    <div class="w-full overflow-auto">
        <div class="relative z-10 w-full overflow-auto p-3 sm:p-4 bg-background border shadow-sm rounded-lg">
            <!-- Progress Line -->
            <div class="mx-3 sm:mx-4 absolute top-[40%] lg:w-[92%] w-[87.8%] max-[390px]:w-[100%] left-4 right-4 z-0 h-1 
            bg-neutral-300 dark:bg-neutral-500 rounded-full after:absolute 
            after:h-[4px] after:bg-black dark:after:bg-neutral-800" :class="{
                'after:w-[26%] sm:after:w-[26%]': currentProcess === 1, 'after:w-[55%] sm:after:w-[51%]': currentProcess === 2,
                'after:w-[76%] sm:after:w-[76%]': currentProcess === 3, 'after:w-[110%] sm:after:w-[100%]': currentProcess === 4,
            }">
            </div>
            <!-- Progress Icons -->
            <div class="relative z-10 flex items-center justify-between gap-4 sm:gap-6">
                <div v-for="(item, index) in items" :key="index"
                    class="flex flex-col items-center text-center w-[60px] sm:w-[80px] flex-shrink-0">
                    <div class="size-10 sm:size-14 rounded-full flex items-center justify-center mb-2 transition-colors"
                        :class="{
                            'bg-primary dark:bg-neutral-800 text-neutral-50': index <= currentProcess,
                            'bg-neutral-300 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-50': index > currentProcess
                        }">
                        <Icon :name="item.icon" class="text-lg sm:text-2xl" />
                    </div>
                    <p class="text-[10px] sm:text-xs font-semibold capitalize whitespace-nowrap" :class="{
                        'text-primary': index <= currentProcess,
                        'text-neutral-500 dark:text-neutral-400': index > currentProcess
                    }">
                        {{ item.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
