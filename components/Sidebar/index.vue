<script setup>
const open = ref(false);
</script>
<template>
    <div class="w-full lg:w-fit">
        <div class="p-4 flex lg:hidden items-center justify-between">
            <Logo />
            <Icon name="stash:burger-classic-duotone" size="25" class="cursor-pointer hover:text-neutral-400 transition"
                @click="open = true" />
            <transition name="fade">
                <div v-if="open" class="z-[999] fixed top-0 left-0 w-full h-screen bg-white">
                    <Icon name="heroicons:x-mark-16-solid" size="25"
                        class="cursor-pointer z-[50] absolute right-4 top-6 hover:text-neutral-400"
                        @click="open = false" />
                    <SidebarMenu />
                </div>
            </transition>
        </div>
        <div class="hidden lg:flex h-screen border-r">
            <SidebarMenu />
        </div>
    </div>
</template>

<style scoped>

</style>