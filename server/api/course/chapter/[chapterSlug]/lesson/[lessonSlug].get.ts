import { PrismaClient } from "@prisma/client";
import protectRoute from "~/server/utils/protectRoute";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (event.context.params?.chapterSlug !== '1-chapter-1') {
    protectRoute(event);
  }

  const { chapterSlug, lessonSlug } = event.context.params as {
    chapterSlug: string;
    lessonSlug: string;
  };

  const lesson = await prisma.lesson.findFirst({
    where: {
        slug: lessonSlug,
        Chapter: {
            slug: chapterSlug,
        },
    },
  });

  if (!lesson) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Lesson not found',
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
