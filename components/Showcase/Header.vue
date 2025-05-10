<script setup>
const router = useRouter();
const route = useRoute();
</script>

<template>
    <div class="flex items-center justify-between pb-6">
        <h2 class="capitalize font-semibold">top selling products</h2>
        <Button variant="outline" class="capitalize" @click="router.push({ name: 'products' })">
            see all products</Button>
    </div>
</template>