<script setup>
const name = ref('Magdi Khaled');
const isUserImage = ref(true);
const show = ref(false);
</script>

<template>
    <div class="p-2 relative border-2 rounded-2xl m-1">
        <UserItemOptions :show="show" />
        <div class="w-full h-[60px] flex items-center gap-2 cursor-pointer p-1 transition duration-150">
            <div class="w-[55px] h-full border rounded-full overflow-hidden flex items-center justify-center font-bold">
                <span v-if="!isUserImage">{{ name[0] }}</span>
                <img v-else src="@/assets/media/userImage.webp" />
            </div>
            <div class="flex items-center justify-between w-11/12">
                <p class="text-sm font-bold">{{ name }}</p>
                <Icon name="mi:options-vertical" size="25" class="hover:opacity-[0.85]" @click="show = !show" />
            </div>
        </div>
    </div>
</template>