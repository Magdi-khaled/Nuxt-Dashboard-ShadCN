<script setup lang="ts">
const name = ref('Magdi Khaled');
const email = ref('magdikhaled23s@gmail.com');
const isUserImage = ref(true);
const show = ref(false);
const userDropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
    if (userDropdownRef.value && !userDropdownRef.value.contains(event.target as Node)) {
        show.value = false;
    }
};

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <div ref="userDropdownRef" class="relative">
        <UserCardDropdown :show="show" />
        <div class="w-full flex items-center gap-2 cursor-pointer">
            <div @click="show = !show"
                class="flex items-center justify-between font-bold hover:opacity-[0.85] transition">
                <span v-if="isUserImage" class="border rounded-full px-[15px] py-2 bg-white dark:text-background">
                    {{ name[0] }}
                </span>
                <img v-else src="@/assets/media/userImage.webp" class="rounded-full size-12" />
                <div class="ml-2 sm:flex flex-col hidden">
                    <p class=" text-sm font-medium">{{ name }}</p>
                    <p class="text-[11px] text-neutral-500 font-medium">{{ email }}</p>
                </div>
                <Icon name="iconamoon:arrow-down-2-thin" size="30" class="hover:opacity-[0.5]" />
            </div>
        </div>
    </div>
</template>
