<template>
    <NuxtLayout>
        <div class="flex flex-col">
            <div v-if="error.statusCode === 404" class="prose">
                <h1>404</h1>
                <p>Guess that page doesn't exist</p>
            </div>
            <div v-else class="prose">
                <h1>{{ error.statusCode || 'Error' }}</h1>
                <p>It looks like something went wrong</p>
                <p>Sorry about that</p>
            </div>
            <div class="prose mt-5">
                <p>
                    <strong>{{ error.message || 'No message available' }}</strong>
                </p>
                <p>
                    Go the the
                    <a
                        class="hover:cursor-pointer"
                        @click="handleError"
                    >
                        First Lesson
                    </a>
                </p>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
    })
}
</script>