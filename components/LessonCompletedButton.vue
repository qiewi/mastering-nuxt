<template>
  <label
    :class="[
      'px-4 py-2 rounded cursor-pointer transition-colors select-none',
      modelValue ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'
    ]"
  >
    <input
      type="checkbox"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
      class="hidden"
    />
    {{ modelValue ? 'Completed!' : 'Mark as complete' }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
::selection {
  display: none;
}
</style>
