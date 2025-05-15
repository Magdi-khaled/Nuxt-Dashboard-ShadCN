<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="text-center my-24 sm:my-16">
    <img src="@/assets/media/not-found-bg.webp" alt="not-found image" class="w-[28rem] m-auto grayscale">
    <Button @click="router.push({ name: 'index' })" variant="outline">
      Back to Home
    </Button>
  </div>
</template>
