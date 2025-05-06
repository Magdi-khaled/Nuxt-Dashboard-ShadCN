<script setup>
const open = ref(false);
const colorMode = useColorMode();

const toggleDark = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>
<template>
    <div class="lg:sticky top-0">
        <div class="z-50 flex items-center justify-between w-full h-full p-4 lg:hidden">
            <Logo />
            <Button variant="ghost" @click="toggleDark" class="w-fit cursor-pointer pt-2 px-2 rounded-full border">
                <Icon name="line-md:light-dark-loop" size="25" />
            </Button>
            <Icon name="stash:burger-classic-duotone" size="25" class="cursor-pointer hover:text-neutral-400 transition"
                @click="open = true" />
            <transition name="fade">
                <div v-if="open"
                    class="fixed bg-white dark:bg-background top-0 left-0 z-[999] w-full h-[100dvh] flex flex-col justify-between">
                    <Icon class="absolute z-50 cursor-pointer right-4 top-4 hover:text-neutral-500 transition" size="25"
                        name="material-symbols:close" @click="open = false" />
                    <SidebarMenu />
                    <UserItem />
                </div>
            </transition>
        </div>
        <div class="relative w-[250px] h-[100dvh] hidden lg:flex flex-col justify-between border-r">
            <SidebarMenu />
            <Button variant="ghost" @click="toggleDark"
                class="absolute right-2 top-6 w-fit cursor-pointer pt-2 px-2 rounded-full border">
                <Icon name="line-md:light-dark-loop" size="25" />
            </Button>
            <UserItem />
        </div>
    </div>
</template>