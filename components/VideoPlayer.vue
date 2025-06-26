<template>
  <iframe
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    width="560"
    height="315"
    title="Video Player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: number;
}>();
</script>
