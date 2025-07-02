import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const lessonSelect = Prisma.validator<Prisma.LessonSelect>()({
  title: true,
  slug: true,
  number: true,
});

export type LessonOutline = Prisma.LessonGetPayload<{
  select: typeof lessonSelect;
}> & { path: string };

const chapterSelect = Prisma.validator<Prisma.ChapterSelect>()({
  title: true,
  slug: true,
  number: true,
  lessons: {
    select: lessonSelect,
  },
});

export type ChapterOutline = Omit<
  Prisma.ChapterGetPayload<{ select: typeof chapterSelect }>,
  "lessons"
> & { lessons: LessonOutline[] };

const courseSelect = Prisma.validator<Prisma.CourseSelect>()({
  title: true,
  chapters: {
    select: chapterSelect,
  },
});

export type CourseOutline = Omit<
  Prisma.CourseGetPayload<{ select: typeof courseSelect }>,
  "chapters"
> & { chapters: ChapterOutline[] };

export default defineEventHandler(async () => {
    const course = await prisma.course.findFirst({
      select: courseSelect
    });
  
    if (!course) {
      throw createError({
        statusCode: 404,
        statusMessage: "Course not found"
      });
    }
  
    const chapters: ChapterOutline[] = course.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      }))
    }));
  
    return {
      ...course,
      chapters
    };
  });
  
