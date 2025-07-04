<template>
  <span 
    :class="[
      'flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white text-sm font-bold',
      color || 'bg-green-500'
    ]"
  >
    <slot>
      <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  color?: string
}>()
</script>
  