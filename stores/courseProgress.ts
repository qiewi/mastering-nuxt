import { defineStore } from "pinia";

export const useCourseProgress = defineStore("courseProgress", () => {
  const progress = ref<any>({});

  const initialized = ref(false);

  async function initialize() {
    if (initialized.value) return;
    initialized.value = true;
  }

  const toggleComplete = async (chapter: string, lesson: string) => {
    const user = useSupabaseUser();
    if (!user.value) return;

    if (!chapter || !lesson) {
      const {
        params: { chapterSlug, lessonSlug },
      } = useRoute();
      chapter = chapterSlug as string;
      lesson = lessonSlug as string;
    }

    const currentProgress = progress.value[chapter]?.[lesson];

    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress,
    };

    // Update the progress in the DB
    try {
      await $fetch(`/api/course/chapter/${chapter}/lesson/${lesson}/progress`, {
        method: "POST",
        // Automatically stringified by ofetch
        body: {
          completed: !currentProgress,
        },
      });
    } catch (error) {
      console.error(error);

      // If the request failed, revert the progress value
      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress,
      };
    }
  };

  return {
    initialize,
    progress,
    toggleComplete,
  };
});
