<script setup lang="ts">
const { loading } = useHelper();
const modalActive = ref(false);
const admin = reactive({
    email: 'magdikhaled23s@gmail.com',
    password: '1234',
});
const currentPassword = ref('');
const newPassword = ref('');
const repeatPassword = ref('');
const submitted = ref(false);
const hideChangePassword = ref(false);

const updatePassword = () => {
    console.log('password saved');
};
const clearForm = () => {
    if (!modalActive.value) {
        currentPassword.value = '';
        newPassword.value = '';
        repeatPassword.value = '';
    }
};
</script>

<template>
    <div>
        <h1 class="pb-4">Security Sittings</h1>
        <div class="bg-background border shadow-sm rounded-lg p-6">
            <div class="flex flex-wrap items-end gap-2 border-b pb-4">
                <div>
                    <label for="password">Password</label>
                    <Input type="password" id="password" disabled v-model="admin.password" class="min-w-3xs my-2" />
                </div>
                <Button @click="modalActive = true" class="mb-2">
                    Change password
                </Button>
            </div>
            <BaseModal v-model:modalActive="modalActive" @clear="clearForm">
                <h2 class="text-xl border-b p-2">Change password</h2>
                <form @submit.prevent="updatePassword" class="w-[350px] grid grid-cols-1 p-2">
                    <div class="flex flex-col capitalize">
                        <label for="currentPassword" class="font-medium">Current password</label>
                        <Input type="password" id="currentPassword" placeholder="Current password" autocomplete="off"
                            v-model="currentPassword" class="p-2 my-1 border-2 rounded-sm" />
                        <p v-if="currentPassword != '1234' && submitted" class="text-red-600 font-medium text-sm">
                            current password incorrect *</p>
                    </div>
                    <div class="flex flex-col capitalize">
                        <label for="newPassword" class="font-medium">New Password</label>
                        <Input type="password" id="newPassword" placeholder="New password" autocomplete="off"
                            v-model="newPassword" class="p-2 my-1 border-2 rounded-sm font-medium" />
                    </div>
                    <div class="flex flex-col capitalize">
                        <label for="repeatPassword" class="font-medium">Repeat New Password</label>
                        <Input type="password" id="repeatPassword" placeholder="Confirm new password" autocomplete="off"
                            v-model="repeatPassword" class="p-2 my-1 border-2 rounded-sm" />
                        <p v-if="newPassword != repeatPassword" class="text-red-600">
                            miss match password *</p>
                    </div>
                    <div class="flex items-center gap-2 justify-end mt-4">
                        <Button variant="ghost" @click="updatePassword">
                            Cancel </Button>
                        <Button @click="updatePassword" :disabled="hideChangePassword">
                            <p v-if="!loading">save</p>
                            <Spinner v-else />
                        </Button>
                    </div>
                </form>
            </BaseModal>
            <!-- --- -->
            <div class="pt-4">
                <h2>Account Deletion</h2>
                <button class="cursor-pointer font-semibold text-lg text-red-500 underline
                    underline-offset-6 hover:no-underline my-2">
                    Delete your account
                </button>
                <p class="font-medium text-gray-500">
                    We are sad to see you go, but hope to see you again!
                </p>
            </div>
        </div>
    </div>
</template>