<script setup lang="ts">
import type IProduct from '~/types/useProduct';

const route = useRoute();
const router = useRouter();
const data = useMockProducts();
const { loading, categories } = useHelper();

const colors = ['bg-black', 'bg-cyan-800', 'bg-emerald-800', 'bg-pink-800', 'bg-purple-800'];
const sizes = ['XL', 'L', 'M', 'SM', 'XS'];
const product: IProduct = computed(() => data.value.find(v => v.productID === route.params.id));

const editProduct = () => {
    try {
        console.log('product edited');
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            router.push(`/products/${product.value.productID}`);
        }, 2000);
    } catch (e) {
        console.error(e);
    }
};
const handleImageChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    console.log(file);
    if (file) {
        product.value.preview = URL.createObjectURL(file);
    }
};
</script>

<template>
    <div class="h-full">
        <form @submit.prevent="editProduct"
            class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 p-4 bg-background rounded-lg shadow-sm border">
            <h1
                class="sm:col-span-3 col-span-1 capitalize font-medium sm:text-[24px] text-[20px] border-b border-b-neutral-400 w-fit mb-2">
                edit product: #{{ product.productID }}</h1>
            <ProductPreview class="sm:col-span-3 col-span-1" :product="product" :colors="colors" :sizes="sizes" />
            <div>
                <label for="productPrice">Price</label>
                <Input id="productPrice" type="number" name="price" v-model="product.price" />
            </div>
            <div>
                <label for="productQuantity">Quantity</label>
                <Input id="productQuantity" type="number" name="quantity" v-model="product.quantity" />
            </div>
            <div>
                <label for="productCategory">Category</label>
                <Select v-model="product.category">
                    <SelectTrigger class="w-full capitalize">
                        <SelectValue placeholder="Select Category..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem v-for="category, index in categories" :key="index" :value="category">
                                <span class="capitalize"> {{ category }}</span>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label for="productPreview">Preview Image</label>
                <Input id="productPreview" type="file" accept="image/*" @change="handleImageChange"
                    class="h-[2.625rem] text-sm file:text-xs file:cursor-pointer file:rounded file:border file:border-neutral-400 file:bg-neutral-100 file:p-1 p-[6px]" />
            </div>
            <div>
                <label for="productPreview">Other Images</label>
                <Input id="productPreview" type="file" accept="image/*" multiple @change="handleImageChange"
                    class="h-[2.625rem] text-sm file:text-xs file:cursor-pointer file:rounded file:border file:border-neutral-400 file:bg-neutral-100 file:p-1 p-[6px]" />
            </div>
            <div class="sm:col-span-3 col-span-1 flex gap-2 justify-end my-2">
                <Button variant="outline" @click="router.push({ name: 'products' })" class="px-4">Cancel</Button>
                <Button @click="editProduct" :disabled="loading">
                    <p v-if="!loading" class="px-4">Edit</p>
                    <Spinner v-else />
                </Button>
            </div>
            <div class="col-span-1 sm:col-span-3 text-end">
                <p class="text-neutral-500 font-medium">
                    Product ID: {{ product.productID }}, Create date: {{ product.createdDate }}</p>
            </div>
        </form>
    </div>
</template>