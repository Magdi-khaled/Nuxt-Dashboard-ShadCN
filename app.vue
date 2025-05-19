<script setup lang="ts">
const token = useCookie('token', {
  maxAge: 60 * 60 * 24,
  path: '/',
  secure: true,
  sameSite: 'lax',
});
token.value = null;

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
