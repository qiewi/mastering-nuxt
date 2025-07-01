import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const course = await prisma.course.create({
    data: {
      title: "TypeScript with Vue.js 3",
      chapters: {
        create: [
          {
            title: "Chapter 1",
            slug: "1-chapter-1",
            number: 1,
            lessons: {
              create: [
                {
                  title: "Introduction to TypeScript with Vue.js 3",
                  slug: "1-introduction-to-typescript-with-vue-js-3",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/introduction-to-typescript-with-vue-js-3",
                  videoId: 684236333,
                  text: `In this lesson, we take a look at some of the benefits of using TypeScript in Vue.js applications:

Improved error detection in your IDE and at build time
Safer and less stressful refactoring
More focused and accurate IDE autocompletion

We also answer the question: "Are there any cases when you wouldn't want to use TypeScript?"`,
                  sourceUrl: "",
                },
                {
                  title: "TypeScript in Vue Components",
                  slug: "2-typescript-in-vue-components",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/typescript-in-vue-components",
                  videoId: 684236334,
                  text: `Learn how to properly set up TypeScript in Vue.js 3 components using the Composition API.`,
                  sourceUrl: "",
                },
                {
                  title: "Typing Component Events",
                  slug: "3-typing-component-events",
                  number: 3,
                  downloadUrl:
                    "https://vueschool.io/lessons/typing-component-events",
                  videoId: 684236335,
                  text: `Learn how to properly type component events in Vue.js 3.`,
                  sourceUrl: "",
                },
              ],
            },
          },
          {
            title: "Chapter 2",
            slug: "2-chapter-2",
            number: 2,
            lessons: {
              create: [
                {
                  title: "Advanced TypeScript Patterns",
                  slug: "1-advanced-typescript-patterns",
                  number: 1,
                  downloadUrl:
                    "https://vueschool.io/lessons/advanced-typescript-patterns",
                  videoId: 684236335,
                  text: `Explore advanced TypeScript patterns and how to apply them in Vue.js applications.`,
                  sourceUrl:
                    "https://vueschool.io/lessons/advanced-typescript-patterns",
                },
                {
                  title: "TypeScript with Pinia",
                  slug: "2-typescript-with-pinia",
                  number: 2,
                  downloadUrl:
                    "https://vueschool.io/lessons/typescript-with-pinia",
                  videoId: 684236336,
                  text: `Learn how to use TypeScript with Pinia for type-safe state management.`,
                  sourceUrl:
                    "https://vueschool.io/lessons/typescript-with-pinia",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`Created course: ${course.title}`);
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
