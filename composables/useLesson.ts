import { StorageSerializers } from '@vueuse/core';
import type { LessonWithPath } from '~/types/course';

export default async (
    chapterSlug: string,
    lessonSlug: string
) => {

    const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    const lesson = useSessionStorage<LessonWithPath>(
        url, 
        null,
        {
            serializer: StorageSerializers.object,
        }
    );

    // const { data, error } = await useAsyncData(() => 
    //     $fetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)
    // )

    // const { data, error } = await useFetch(
    //     `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    // );

    // if (error.value) {
    //     throw createError({
    //         ...error.value,
    //         statusMessage: `could not fetch lesson ${lessonSlug} in chapter ${chapterSlug}`
    //     });
    // }

    if (!lesson.value) {
        const { data, error } = await useFetch<LessonWithPath>(
            url,
        );

        if (error.value) {
            throw createError({
                ...error.value,
                statusMessage: `could not fetch lesson ${lessonSlug} in chapter ${chapterSlug}`
            });
        }

        lesson.value = data.value;
    } else {
        console.log(`Getting lesson ${lessonSlug} in chapter ${chapterSlug} from cache`);
    }

    return lesson;
};