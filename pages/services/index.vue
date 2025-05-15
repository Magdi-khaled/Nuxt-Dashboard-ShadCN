<script setup lang="ts">
const { loading } = useHelper();
const route = useRoute();
const router = useRouter();

const defaultChoice: string = 'choose-service';
const items = [defaultChoice, 'add-product', 'edit-product', 'find-product'];
const selectedService = ref(defaultChoice);
const activeService = ref(defaultChoice);

watch(selectedService, async (newService) => {
    if (newService === activeService.value) return;
    if (newService === defaultChoice) {
        localStorage.setItem('selectedService', defaultChoice);
        router.push({ name: 'services' });
        activeService.value = defaultChoice;
        return
    }
    loading.value = true;
    // await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
    activeService.value = newService;
    localStorage.setItem('selectedService', activeService.value)
    router.push({ name: 'services', hash: `#${activeService.value}` });
});

onMounted(async () => {
    loading.value = true;
    const localStValue = localStorage.getItem('selectedService');
    activeService.value = localStValue as string;
    selectedService.value = localStValue as string;
    await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
});
</script>

<template>
    <div class="my-4 h-full">
        <header class="m-auto w-full sm:w-1/2 bg-background">
            <CustomSelect place-holder="Choose Service..." :items="items" v-model:selected-item="selectedService"
                :is-services="true" />
        </header>
        <main class="my-6">
            <transition name="fade">
                <Loading v-if="loading" />
                <div v-else-if="!loading && activeService === items[0]" class="text-center h-full">
                    <img src="@/assets/media/service-bg.webp" alt="service-bg"
                        class="sm:w-[30rem] w-[24rem] h-full m-auto opacity-70">
                    <div class="flex items-center justify-center gap-2 mb-2 sm:mb-14">
                        <p class="font-medium text-neutral-700 dark:text-neutral-100">
                            No service selected. Please choose one to get started!</p>
                        <Icon name="fluent:select-all-on-24-regular" size="25" />
                    </div>
                </div>
                <ProductServiceAdd id="add-product" v-else-if="!loading && activeService === items[1]" />
                <ProductServiceEdit id="edit-product" v-else-if="!loading && activeService === items[2]" />
                <ProductServiceSearch id="search-about-product" v-else-if="!loading && activeService === items[3]" />
            </transition>
        </main>
    </div>
</template>