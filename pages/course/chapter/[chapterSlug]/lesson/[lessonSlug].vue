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
                :to="lesson?.path"
            >
                Download Source Code
            </NuxtLink>
            <NuxtLink
                v-if="lesson?.downloadUrl"
                class="font-normal text-md text-gray-500"
                :to="lesson?.path"
            >
                Download Video
            </NuxtLink>
        </div>
        <VideoPlayer
            v-if="lesson?.videoId"
            :video-id="lesson?.videoId"
        />
        <p>{{ lesson?.text }}</p>
        <ClientOnly>
            <LessonCompletedButton 
                :model-value="isLessonCompleted" 
                @update:model-value="
                    throw createError('Could not update');
                "
            />
        </ClientOnly>
    </div>
</template>

<script setup>
import { useCourse } from '~/composables/useCourse';

const course = useCourse();
const route = useRoute();

if (
    route.params.lessonSlug === '3-typing-component-events'
) {
    console.log(
        route.params.paramthatdoesnotexistwhoops.capitalizeIsNotAMethod()
    )
}

const chapter = computed(() => {
    return course.chapters.find(
        chapter => chapter.slug === route.params.chapterSlug
    )
});

if (!chapter.value) {
    throw createError({
        statusCode: 404,
        message: 'Chapter not found',
    })
}

const lesson = computed(() => {
    return chapter.value?.lessons.find(
        lesson => lesson.slug === route.params.lessonSlug
    )
})

if (!lesson.value) {
    throw createError({
        statusCode: 404,
        message: 'Lesson not found',
    })
}

const title = computed(() => {
    return `${lesson.value?.title} - ${course.title}`
})
useHead({
    title,
})

const progress = useLocalStorage('progress', []);

const isLessonCompleted = computed(() => {
    const chapterIndex = (chapter?.value?.number || 1) - 1;
    const lessonIndex = (lesson?.value?.number || 1) - 1;
    
    if (!progress.value[chapterIndex]) return false;
    if (!progress.value[chapterIndex][lessonIndex]) return false;

    return progress.value[chapterIndex][lessonIndex];
})

const toggleLessonCompleted = () => {
    const chapterIndex = (chapter?.value?.number || 1) - 1;
    const lessonIndex = (lesson?.value?.number || 1) - 1;

    if (!progress.value[chapterIndex]) {
        progress.value[chapterIndex] = [];
    }

    progress.value[chapterIndex][lessonIndex] = !isLessonCompleted.value;
}

</script>