<script setup>
const open = ref(false);
</script>
<template>
    <div class=" lg:sticky top-0">
        <div
            class="z-50 fixed bottom-0 shadow-top bg-background dark:bg-neutral-800 h-fit flex items-center justify-between w-full px-2 py-2 lg:hidden">
            <Logo />
            <Theme />
            <Icon name="pepicons-pencil:grid" size="27" class="cursor-pointer hover:text-neutral-700 transition"
                @click="open = true" />
            <transition name="fade">
                <div v-if="open"
                    class="fixed bg-white dark:bg-background top-0 left-0 z-[999] w-full h-[100dvh] flex flex-col justify-between">
                    <Icon class="absolute z-50 cursor-pointer right-4 top-8 hover:text-neutral-500 transition" size="25"
                        name="material-symbols:close" @click="open = false" />
                    <SidebarMenu />
                </div>
            </transition>
        </div>
        <div class="relative w-[250px] h-[100dvh] hidden lg:flex flex-col justify-between border-r">
            <SidebarMenu />
        </div>
    </div>
</template>