<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div data-slot="card" :class="cn(
    'bg-background text-card-foreground flex flex-col gap-3 rounded-lg border py-6 shadow-2xs',
    props.class,
  )
    ">
    <slot />
  </div>
</template>
