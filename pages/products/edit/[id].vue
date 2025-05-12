<script setup>
const route = useRoute();
</script>

<template>
    <div>
        Edit product:#{{ route.params.id }}
    </div>
</template>