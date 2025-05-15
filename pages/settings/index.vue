<script setup>

const hideChangePassword = ref(false);
const updatePassword = () => {
    console.log('password saved');
};
</script>

<template>
    <div class="bg-background p-4 shadow-sm border rounded-lg">
        <h1 class="text-lg font-semibold mb-2 pb-2 border-b capitalize">security sittings</h1>
        <div>
            <form class="grid grid-cols-1 gap-4" @submit.prevent="!hideChangePassword && updatePassword()">
                <!-- <Field type="password" label="current password" name="currentPassword"
                            placeholder="current password" v-model="currentPassword"
                            @handleChange="handleChangePassword" />

                        <Field type="password" label="new password" name="newPassword" v-model="newPassword"
                            placeholder="new password" @handleChange="handleChangePassword" />

                        <Field type="password" label="repeate new password" name="confirmNewPassword"
                            v-model="confirmNewPassword" placeholder="repeate new password"
                            @handleChange="handleChangePassword" /> -->

                <div class="w-full mt-4 flex justify-end">
                    <Button @click="!hideChangePassword && updatePassword"
                        class="w-5/12 sm:w-2/12 py-[8px] text-sm sm:text-md" :disabled="hideChangePassword">
                        update
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>