import { PrismaClient } from "@prisma/client";
import { protectRoute } from "#imports";
import { ChapterOutline, LessonOutline } from "../course/meta.get"; 
import type { CourseProgress, ChapterProgress } from "~/types/course";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  await protectRoute(event);

  const {
    user: {email: userEmail},
  } = event.context;


  const userProgress = await prisma.lessonProgress.findMany({
    where: {
      userEmail,
      Lesson:{
        Chapter: {
          Course:{
            id: 1
          }
        }
      }
    },
    select:{
      completed: true,
      Lesson: {
        select: {
          slug: true,
          Chapter: {
            select: {
              slug: true,
            }
          }
        }
      }
    }
  });

  const courseOutline = await $fetch('/api/course/meta');

  if (!courseOutline) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Course outline not found'
    })
  }

  const progress = courseOutline.chapters.reduce(
    (
        courseProgress: CourseProgress, 
        chapter: ChapterOutline
    ) => {
    courseProgress[chapter.slug] = chapter.lessons.reduce(
        (
            chapterProgress: ChapterProgress, 
            lesson: LessonOutline
        ) => {
      // const isCompleted =
      chapterProgress[lesson.slug] = userProgress.find(
        (progress) =>
          progress.Lesson.slug === lesson.slug &&
          progress.Lesson.Chapter?.slug === chapter.slug
      )?.completed || false;

      // chapterProgress[lesson.slug] = isCompleted;
      return chapterProgress;
    }, 
    {}
  );

    return courseProgress;
  }, {}
  );

  return progress;

});