<script setup>
const name = ref('Magdi Khaled');
const email = ref('magdikhaled23s@gmail.com');
const isUserImage = ref(true);
const show = ref(false);
</script>

<template>
    <div class="relative">
        <UserCardDropdown :show="show" />
        <div class="w-full flex items-center gap-2 cursor-pointer">
            <div class="flex items-center justify-between font-bold">
                <span v-if="isUserImage" class="border rounded-full px-[15px] py-2 bg-white dark:text-background">
                    {{ name[0] }}</span>
                <img v-else src="@/assets/media/userImage.webp" class="rounded-full size-12" />
                <div class="ml-2 flex flex-col">
                    <p class="text-sm font-medium">{{ name }}</p>
                    <p class="text-[11px] text-neutral-500 font-medium">{{ email }}</p>
                </div>
                <Button variant="ghost" class="w-fit active:scale-[100%] active:shadow-none" @click="show = !show">
                    <Icon name="iconamoon:arrow-down-2-thin" size="30" class="hover:opacity-[0.5]" />
                </Button>
            </div>
        </div>
    </div>
</template>