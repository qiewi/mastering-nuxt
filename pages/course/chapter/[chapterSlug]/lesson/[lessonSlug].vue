<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter?.number }} - {{ lesson?.number }}
    </p>
    <h2 class="my-0">{{ lesson?.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson?.sourceUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson?.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson?.downloadUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson?.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson?.videoId" :video-id="lesson?.videoId" />
    <p>{{ lesson?.text }}</p>
    <ClientOnly>
      <LessonCompletedButton
        v-if="user"
        :model-value="isCompleted"
        @update:model-value="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useCourseProgress } from "~/stores/courseProgress.ts";
const course = await useCourse();
const user = useSupabaseUser();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);
const store = useCourseProgress();
const { initialize, toggleComplete } = store;

initialize();

definePageMeta({
  middleware: [
    async function ({ params }, from) {
      const course = await useCourse();

      const chapter = course.value.chapters?.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        throw abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        throw abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

// if (
//     route.params.lessonSlug === '3-typing-component-events'
// ) {
//     console.log(
//         route.params.paramthatdoesnotexistwhoops.capitalizeIsNotAMethod()
//     )
// }

const isCompleted = computed(() => {
  return store.progress[chapterSlug]?.[lessonSlug] || false;
});

const chapter = computed(() => {
  return course.value.chapters?.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

// const lesson = computed(() => {
//     return chapter.value?.lessons.find(
//         lesson => lesson.slug === route.params.lessonSlug
//     )
// })

const title = computed(() => {
  return `${lesson?.value?.title} - ${course.value?.title}`;
});
useHead({
  title,
});
</script>
