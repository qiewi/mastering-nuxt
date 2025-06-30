<template>
    <div>
        <div class="prose mb-12">
            <h1>
                <span class="font-medium">
                    <span class="font-bold">{{  title  }}</span>
                </span>
            </h1>
        </div>

        <div class="flex flex-row justify-center flex-grow">
            <div
                class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
            >
                <h3>Chapters</h3>
                <div
                    class="space-y-1 mb-4 flex flex-col"
                    v-for="chapter in chapters"
                    :key="chapter.slug"
                >
                    <h4>{{ chapter.title }}</h4>
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
                        <span class="text-gray-500">
                        {{ index + 1 }}.
                        </span> 
                        <span>
                        {{ lesson.title }}
                        </span>
                    </NuxtLink>
                </div>
                <!-- Lesson and course will be listed here -->
            </div>

            <div class="prose p-12 bg-white rounded-md w-full max-w-[80ch]">
                <NuxtErrorBoundary>
                    <NuxtPage />
                    <template #error="{ error }">
                        <p>
                            Oh no! Something went wrong with the lesson.
                            <code>{{ error  }}</code>
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
import { useCourse } from '~/composables/useCourse';

const { chapters, title } = useCourse();

const resetError = async (error) => {
    throw createError({
        fatal: true,
        message: 'Fatal Error',
    })
}
</script>