<script setup>
const name = ref('Magdi Khaled');
const isUserImage = ref(true);
const show = ref(true);
</script>

<template>
    <div class="p-2 relative border m-1">
        <UserItemOptions :show="show" />
        <div class="flex items-center gap-2 cursor-pointer rounded p-2 transition duration-150">
            <div class="bg-green-300 h-10 w-10 rounded-full flex items-center justify-center font-bold">
                <span v-if="!isUserImage">{{ name[0] }}</span>
                <img v-else src="/logo.png" />
            </div>
            <div class="flex items-center justify-between w-10/12">
                <p class="text-sm font-bold">{{ name }}</p>
                <Icon name="ic:outline-settings" size="25" class="hover:opacity-[0.85]" @click="show = !show" />
            </div>
        </div>
    </div>
</template>