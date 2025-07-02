<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="(chapter, index) in course.chapters"
          :key="chapter.slug"
        >
          <h4 class="flex justify-between items-center">
            {{ chapter.title }}
            <span
              v-if="percentageCompleted && user"
              class="text-emerald-500 text-sm"
            >
              {{ percentageCompleted.chapters[index] }}%
            </span>

          </h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1"
            :to="lesson.path"
            :class="{
              'text-blue-500': $route.fullPath === lesson.path,
              'text-gray-600': $route.fullPath !== lesson.path,
            }"
          >
            <span class="text-gray-500"> {{ index + 1 }}. </span>
            <span>
              {{ lesson.title }}
            </span>
          </NuxtLink>
        </div>
        <!-- course progress -->
         <div
          v-if="percentageCompleted"
          class="mt-8 text-sm font-medium text-gray-500 flex justify-between items-center"
         >
          Course Completion:
          <span> {{ percentageCompleted.course }}% </span>
         </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-full max-w-[80ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no! Something went wrong with the lesson.
              <code>{{ error }}</code>
            </p>
            <p>
              <button
                class="hover:cursor-pointer bg-gray-500 text-white font-bold px-2"
                @click="resetError(error)"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
        <!-- Lesson and course will be listed here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCourseProgress } from "~/stores/courseProgress";
import { storeToRefs } from "pinia";

const user = useSupabaseUser();
const course = await useCourse();
const firstLesson = await useFirstLesson();

const { percentageCompleted } = storeToRefs(
  useCourseProgress()
);

const resetError = async (error) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};
</script>
