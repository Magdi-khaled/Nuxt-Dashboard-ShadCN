<script setup>
const route = useRoute();
</script>

<template>
    <div>
        product : #{{ route.params.id }}
    </div>
</template>