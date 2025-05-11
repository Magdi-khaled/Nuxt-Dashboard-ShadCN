<script setup>
const route = useRoute();
</script>

<template>
    <div>
        hello from {{ route.params.id }} page
    </div>
</template>