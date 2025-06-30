<template>
    <div class="prose w-full max-w-2xl h-9">
        <h1>
            Log in to {{ title }}
        </h1>
        <button
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            @click="login"
        >
            Log in with Github
        </button>
    </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

// Redirect to home if already logged in
if (user.value) {
    await navigateTo('/');
}

watch(user, (newUser) => {
    if (newUser) {
        navigateTo('/');
    }
});

const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `${window.location.origin}/login`
        }
    });

    if (error) {
        console.error(error);
    }
};
</script>