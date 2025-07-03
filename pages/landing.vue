<template>
  <section class="space-y-12 flex flex-col items-center py-16 px-8 bg-white">
    <h1 class="text-7xl font-black text-blue-500 m-0 py-16">
      {{ course.title }}
    </h1>
    <img
      :src="screenshots[0]"
      class="w-full rounded-lg shadow-lg border-2 border-slate-200"
    />
    <div class="text-2xl font-medium">
      Learn how to use TypeScript in your Vue projects to supercharge your IDE's error detection and autocompletion, as well as provide type safe code that's easier to reason about and refactor.
    </div>
    <button
      class="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 w-[40ch]"
      @click="() => (showPayment = !showPayment)"
    >
      Buy Now
    </button>
  </section>

  <Section title="What You'll Learn" variant="blue">
    <ul class="text-2xl font-medium space-y-6">
      <li
        v-for="outcome in learningOutcomes"
        :key="outcome"
        class="relative flex items-start space-x-4"
      >
        <Badge />
        <span>{{ outcome }}</span>
      </li>
    </ul>
  </Section>

  <Section title="Course Outline" variant="white">
    <ul class="text-2xl font-medium space-y-16">
      <li
        v-for="(chapter, index) in course.chapters"
        :key="chapter.slug"
        class="relative"
      >
        <div class="flex items-center space-x-4 mb-6">
          <Badge>
            {{ index + 1 }}
          </Badge>
          <span class="text-3xl font-bold">{{ chapter.title }}</span>
        </div>

        <ul class="mt-4 space-y-2 ml-10">
          <li
            v-for="lesson in chapter.lessons"
            :key="`${chapter.slug}-${lesson.slug}`"
            class="flex items-center space-x-4"
          >
            <Badge color="bg-blue-400">
              {{ lesson.number }}
            </Badge>
            <span class="text-xl opacity-80">{{
              lesson.title
            }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </Section>

  <!-- Payment Modal -->
  <LazyPayment v-if="showPayment" @close="showPayment = false" />
</template>

<script setup lang="ts">
import CourseScreen from '~/assets/images/course.png';
const course = await useCourse();
const learningOutcomes = [
  'Hands-On Experience with the Benefits of TypeScript',
  'How to make the most out of your IDE',
  'How to use TypeScript with the Composition API',
  'How to use TypeScript with the Options API',
  'How to type reactive data, refs, props, custom events, event handlers, DOM elements, template refs, data from provide/inject, and more'
];
const screenshots = [
  CourseScreen,
];

definePageMeta({
  layout: false,
});

const showPayment = ref(false);
</script>
