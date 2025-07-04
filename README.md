# Mastering Nuxt 3 Course App

A modern web application for **learning and tracking progress** in a TypeScript with Vue.js 3 course. Built with **Nuxt 3** and **Tailwind CSS**, featuring **dynamic routing**, **progress tracking**, and **responsive design**.

## 🌟 Features

- ✅ Dynamic course structure with chapters and lessons
- 📚 Clean, responsive course layout with sidebar navigation
- 📈 Progress tracking with localStorage persistence
- 🎯 Lesson completion system with visual feedback
- 🔗 Dynamic routing for chapters and lessons
- 🎨 Beautiful UI with Tailwind CSS and typography plugin
- 📱 Mobile-friendly responsive design
- ⚡ Fast performance with Nuxt 3's server-side rendering

---

## 🛠️ Tech Stack

**Frontend:**

- [Nuxt 3](https://nuxt.com/)
- [Vue.js 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [Nuxt Tailwind Module](https://tailwindcss.nuxtjs.org/)

**Features:**

- **Auto-imports** for composables and components
- **Dynamic routing** with nested layouts
- **State management** with useState and useLocalStorage
- **SEO optimization** with useHead
- **Typography** with prose classes

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mastering-nuxt
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

### 4. Access the App

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Project Structure

```
mastering-nuxt/
├── app.vue                         # Root layout component
├── error.vue                       # Error page
├── nuxt.config.ts                  # Nuxt configuration
├── package.json                    # Dependencies and scripts
├── pnpm-lock.yaml                  # Lock file for dependencies
├── tsconfig.json                   # TypeScript configuration
├── assets/
│   ├── css/
│   │   └── main.css                # Global styles
│   └── images/
│       └── course.png              # Course assets
├── components/
│   ├── Badge.vue                   # Badge component
│   ├── LessonCompletedButton.vue   # Progress tracking component
│   ├── Modal.vue                   # Modal component
│   ├── Payment.vue                 # Payment component
│   ├── Section.vue                 # Section layout component
│   ├── UserCard.vue                # User card component
│   └── VideoPlayer.vue             # Video player component
├── composables/
│   ├── useCourse.ts                # Course data composable
│   ├── useFetchWithCache.ts        # Caching composable
│   ├── useFirstLesson.ts           # First lesson navigation
│   └── useLesson.ts                # Lesson data composable
├── layouts/
│   └── default.vue                 # Default layout
├── middleware/
│   ├── auth.ts                     # Authentication middleware
│   └── history.global.ts           # Global history middleware
├── pages/
│   ├── index.vue                   # Home page
│   ├── landing.vue                 # Landing page
│   ├── course.vue                  # Course overview page
│   ├── login.vue                   # Login page
│   └── course/
│       └── chapter/
│           └── [chapterSlug]/
│               └── lesson/
│                   └── [lessonSlug].vue  # Dynamic lesson page
├── prisma/
│   ├── schema.prisma               # Database schema
│   ├── seed.js                     # Database seeding
│   └── migrations/                 # Database migrations
├── server/
│   ├── api/
│   │   ├── course/
│   │   │   ├── meta.get.ts         # Course metadata API
│   │   │   └── chapter/
│   │   │       └── [chapterSlug]/
│   │   │           └── lesson/
│   │   │               ├── [lessonSlug].get.ts    # Lesson data API
│   │   │               └── [lessonSlug]/
│   │   │                   └── progress.ts        # Progress tracking API
│   │   ├── user/
│   │   │   └── progress.ts         # User progress API
│   │   └── world.ts                # Example API endpoint
│   ├── middleware/
│   │   └── user.ts                 # Server middleware
│   ├── utils/
│   │   └── protectRoute.ts         # Route protection utility
│   └── tsconfig.json               # Server TypeScript config
├── stores/
│   └── courseProgress.ts           # Progress state management
└── types/
    ├── course.ts                   # Course type definitions
    └── global.d.ts                 # Global type definitions
```

---

Made with 💚 using Nuxt 3!
