# Mastering Nuxt 3 Course App

A modern web application for **learning and tracking progress** in a TypeScript with Vue.js 3 course. Built with **Nuxt 3** and **Tailwind CSS**, featuring **dynamic routing**, **progress tracking**, and **responsive design**.

## 🌟 Features

-   ✅ Dynamic course structure with chapters and lessons
-   📚 Clean, responsive course layout with sidebar navigation
-   📈 Progress tracking with localStorage persistence
-   🎯 Lesson completion system with visual feedback
-   🔗 Dynamic routing for chapters and lessons
-   🎨 Beautiful UI with Tailwind CSS and typography plugin
-   📱 Mobile-friendly responsive design
-   ⚡ Fast performance with Nuxt 3's server-side rendering

---

## 🛠️ Tech Stack

**Frontend:**

-   [Nuxt 3](https://nuxt.com/)
-   [Vue.js 3](https://vuejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
-   [Nuxt Tailwind Module](https://tailwindcss.nuxtjs.org/)

**Features:**

-   **Auto-imports** for composables and components
-   **Dynamic routing** with nested layouts
-   **State management** with useState and useLocalStorage
-   **SEO optimization** with useHead
-   **Typography** with prose classes

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
├── app.vue                # Root layout component
├── nuxt.config.ts         # Nuxt configuration
├── composables/
│   ├── useCourse.ts       # Course data composable
│   └── courseData.js      # Course content data
├── pages/
│   ├── index.vue          # Home page
│   ├── course.vue         # Course overview page
│   └── course/
│       └── chapter/
│           └── [chapterSlug]/
│               └── lesson/
│                   └── [lessonSlug].vue  # Dynamic lesson page
├── components/
│   └── LessonCompletedButton.vue  # Progress tracking component
└── public/                # Static assets
```

---

Made with 💚 using Nuxt 3!
