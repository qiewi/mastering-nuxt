import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const lessonSelect = Prisma.validator<Prisma.LessonSelect>()({
    title: true,
    slug: true,
    number: true
});
  
export type LessonOutline = Prisma.LessonGetPayload<{
    select: typeof lessonSelect;
}> & { path: string };
  
const chapterSelect = Prisma.validator<Prisma.ChapterSelect>()({
    title: true,
    slug: true,
    number: true,
    lessons: {
      select: lessonSelect
    }
});
  
export type ChapterOutline = Omit<
    Prisma.ChapterGetPayload<{ select: typeof chapterSelect }>,
    "lessons"
> & { lessons: LessonOutline[] };

const courseSelect = Prisma.validator<Prisma.CourseSelect>()({
    title: true,
    chapters: {
      select: chapterSelect
    }
});
  
export type CourseOutline = Omit<
    Prisma.CourseGetPayload<{ select: typeof courseSelect }>,
    "chapters"
> & { chapters: ChapterOutline[] };

export default defineEventHandler(async (event) => {
    return prisma.course.findFirst({select: courseSelect})
})
