<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
const isMounted = ref(false)

onMounted(() => isMounted.value = true);
</script>

<template>
    <Button variant="ghost" @click="toggleTheme"
        class="w-fit cursor-pointer p-[6px] rounded-full border active:shadow-none active:scale-[100%]">
        <span v-if="isMounted">
            <Icon
                :name="colorMode.value === 'dark' ? 'material-symbols:light-mode-outline-rounded' : 'material-symbols:dark-mode-outline-rounded'"
                size="21" />
        </span>
    </Button>
</template>