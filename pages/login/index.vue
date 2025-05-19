<script setup lang="ts">
definePageMeta({
    layout: false,
});
const { loading } = useHelper();
const route = useRoute();
const router = useRouter();

const email = ref('');
const password = ref('');
const rememberme = ref(false);

const login = async () => {
    try {
        let logged = true;
        // logged = await store.dispatch('UserLogin', { email: email.value, password: password.value });

        if (logged) {
            loading.value = true;
            setTimeout(() => {
                navigateTo('/');
            }, 1500);
        } else {
            loading.value = false;
            // show.value = true;
            // setTimeout(() => { show.value = false; }, 2000);
        }
    } catch (e) {
        console.log('Login Error:', e);
    }
};
</script>

<template>
    <div class="lg:grid lg:min-h-[100dvh] lg:grid-cols-12">
        <aside class="relative hidden lg:block h-16 lg:h-full lg:order-last lg:col-span-5 xl:col-span-6 border-l
            border-l-neutral-400 shadow-lg bg-neutral-50 dark:bg-neutral-900">
            <img alt="Auth-Img" src="@/assets/media/login.webp"
                class="absolute inset-0 h-full w-full object-cover opacity-95" />
        </aside>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6">
            <div>
                <nuxt-link :to="{ name: 'index' }" class="block text-neutral-900 invert-0 dark:invert w-fit">
                    <img src="@/assets/media/logo.webp" alt="aside auth image" class="w-12">
                </nuxt-link>

                <h1 class="mt-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-200 sm:text-3xl md:text-4xl">
                    Welcome to Novanest</h1>
                <p
                    class="mt-1 text-neutral-600 dark:text-neutral-300 text-sm sm:text-md font-mono tracking-normal capitalize">
                    sign in <span class="lowercase">and</span> manage all your products and customer orders...</p>

                <form @submit.prevent="login" class="grid gap-4 my-1">
                    <div>
                        <label for="email">Email</label>
                        <Input type="email" id="email" placeholder="Enter Email Address" v-model="email" />
                    </div>
                    <div>
                        <label for="email">Password</label>
                        <Input type="password" id="password" placeholder="Enter Password" v-model="password" />
                    </div>

                    <div class="w-full flex justify-end">
                        <nuxt-link :to="{ name: 'login' }" class="font-medium hover:underline text-sm sm:text-md">
                            Forget your password?</nuxt-link>
                    </div>
                    <div class="grid grid-cols-6 gap-4 items-end">
                        <Button class="col-span-3 py-6 capitalize">
                            <p v-if="!loading">log in</p>
                            <Spinner v-else />
                        </Button>
                        <p class="col-span-3 text-sm text-neutral-600 dark:text-neutral-100">
                            Don't have an account?
                            <nuxt-link :to="{ name: 'login' }"
                                class="text-neutral-800 dark:text-neutral-300 underline underline-offset-2">
                                Signup here</nuxt-link>
                        </p>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>