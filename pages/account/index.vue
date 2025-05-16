<script setup lang="ts">
const { loading } = useHelper();
const hideChangeInfo = ref(false);

const adminInfo = ref({
    name: "Magdi Khaled",
    email: "magdikhaled23s@gmail.com",
    phone: "+201122368948",
    address: "Cairo, Egypt",
    bankAccount: {
        name: 'Magdi Khaled Kelany Hassouna',
        accountNumber: '5842 3456 8201 0091',
        bankName: 'Egyptian Arab Land Bank',
    }
});

const hashCardNumber = computed(() => {
    let hashedCard = adminInfo.value.bankAccount.accountNumber;
    hashedCard = hashedCard.split(' ')[0] + ' **** **** **' + hashedCard.split(' ')[3].split('').slice(2).join('');
    return hashedCard;
});

const businessInfo = reactive({
    id: '#711976G',
    name: 'EG-Ystore',
    address: 'Egypt, Cairo, Nasr City',
    rate: `${4.4}/5`,
    stock: 156,
    balance: 5635.0
});
const saveInfo = () => {
    console.log('data saved');
};
const withdraw = async () => {
    loading.value = true;
    // console.log('widrawy process...');
    await new Promise(resolve => setTimeout(resolve, 1500));
    loading.value = false;
}
</script>

<template>
    <div class="grid gap-2">
        <div class="bg-background px-4 py-2 shadow-sm border rounded-lg">
            <h2 class="my-1 capitalize">admin information</h2>
            <form @submit.prevent="!hideChangeInfo && saveInfo()" class="w-full my-2">
                <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div>
                        <label for="name">Name</label>
                        <Input type="text" id="name" :disabled="true" v-model="adminInfo.name" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <Input type="text" id="email" :disabled="true" v-model="adminInfo.email" />
                    </div>
                    <div>
                        <label for="phone">Phone</label>
                        <Input type="text" id="phone" v-model="adminInfo.phone" />
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <Input type="text" id="address" v-model="adminInfo.address" oninput="hideChangeInfo = true" />
                    </div>
                </div>
                <div class="w-full flex justify-end mt-4">
                    <Button @click="!hideChangeInfo && saveInfo()" class="w-5/12 sm:w-2/12 py-[8px] text-sm sm:text-md"
                        :disabled="!hideChangeInfo">
                        Save </Button>
                </div>
            </form>
        </div>
        <div class="bg-background p-4 shadow-sm border rounded-lg">
            <h2 class="my-1 capitalize">business information</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                    <label for="mId">Merchant ID</label>
                    <Input type="text" id="mId" v-model="businessInfo.id" disabled />
                </div>
                <div>
                    <label for="tname">Trade Name</label>
                    <Input type="text" id="tname" v-model="businessInfo.name" disabled />
                </div>
                <div>
                    <label for="stock">Stock</label>
                    <Input type="text" id="stock" v-model="businessInfo.stock" disabled />
                </div>
                <div>
                    <label for="rate">Rate</label>
                    <Input type="text" id="rate" v-model="businessInfo.rate" disabled />
                </div>
                <div class="sm:col-span-1 col-span-2">
                    <label for="phone">Local Address</label>
                    <Input type="text" id="address" v-model="businessInfo.address" disabled />
                </div>
            </div>
        </div>
        <div class="bg-background p-4 shadow-sm border rounded-lg">
            <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="font-semibold capitalize text-lg text-neutral-700 dark:text-neutral-50">wallet (.Net Revenue):
                    <span class="text-neutral-800 dark:text-neutral-200 text-2xl font-semibold">
                        ${{ businessInfo.balance }}</span>
                </p>
                <div class="sm:w-fit w-full flex justify-end">
                    <Button @click="withdraw" class="uppercase">
                        <p v-if="!loading" class="flex items-center gap-1">
                            Withdraw Your Money
                            <Icon name="game-icons:take-my-money" size="25" />
                        </p>
                        <Spinner v-else class="px-8" />
                    </Button>
                </div>
            </div>
            <hr class="my-4">
            <div>
                <h1 class="text-lg font-semibold mb-4 capitalize">Your Bank Account</h1>
                <div class="grid sm:grid-cols-4 grid-cols-1 gap-4">
                    <div>
                        <label for="ownerName">Bank Account Name</label>
                        <Input type="text" id="ownerName" v-model="adminInfo.bankAccount.name" disabled />
                    </div>
                    <div>
                        <label for="cardNumber">Card Number</label>
                        <Input type="text" id="address" v-model="hashCardNumber" disabled />
                    </div>
                    <div>
                        <label for="bankName">Bank Name</label>
                        <Input type="text" id="bankName" v-model="adminInfo.bankAccount.bankName" disabled />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>