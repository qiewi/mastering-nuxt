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
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

onMounted(async () => {
    await nextTick(); // wait for hydration

    const checkUserInterval = setInterval(async () => {
        if (user.value) {
            clearInterval(checkUserInterval);
            await navigateTo(query.redirectTo as string, { replace: true });
        }
    }, 200);
});

const login = async () => {
    const redirectTo = `${window.location.origin}/login?redirectTo=${query.redirectTo}`;

    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo }
    });

    if (error) {
        console.error('OAuth error:', error);
    }
};
</script>