<template>
  <div
    class="fixed inset-0 backdrop-blur-xl backdrop-brightness-50 w-screen h-screen flex items-center justify-center z-50"
  >
    <div
      class="absolute top-4 right-4 text-white text-2xl w-12 h-12 bg-slate-600 hover:bg-slate-500 cursor-pointer flex items-center justify-center rounded"
      @click="$emit('close')"
    >
      &#10005;
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const previousOverflow = ref("");

onMounted(() => {
  // Lock the scrollbar by removing overflow if we have any
  previousOverflow.value = document.body.style.overflow;
  document.body.style.overflow = "hidden";
});

onBeforeUnmount(() => {
  // Restore the overflow and position
  document.body.style.overflow = previousOverflow.value;
});
</script>
