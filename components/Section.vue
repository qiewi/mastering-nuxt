<template>
  <section 
    :class="[
      'py-16 px-8',
      variant === 'blue' 
        ? 'bg-blue-600 text-white' 
        : 'bg-white text-gray-900'
    ]"
  >
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">
        {{ title }}
      </h2>
      <div class="space-y-8">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  variant?: 'blue' | 'white'
}>()
</script> 