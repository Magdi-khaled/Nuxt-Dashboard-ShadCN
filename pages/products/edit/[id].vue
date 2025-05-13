<script setup lang="ts">
import type IProduct from '~/types/useProduct';

const route = useRoute();
const router = useRouter();
const data = useMockProducts();
const { loading, categories, baseColors, clothSizes, shoeSizes } = useHelper();

const product: IProduct = computed(() => data.value.find(v => v.productID === route.params.id));

watch(() => product.value.category, (newVal) => {
    if (product.category === 'shoes' && newVal !== 'shoes')
        product.value.sizes = []
    else product.value.sizes = []
});

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
const handleImagesChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files) {
        const selectedFiles = Array.from(files).slice(0, 4);
        product.value.otherImages = selectedFiles.map(file => URL.createObjectURL(file));
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
            <ProductPreview class="sm:col-span-3 col-span-1" :product="product" />
            <div>
                <label for="productPrice">Price</label>
                <Input id="productPrice" type="number" name="price" v-model="product.price" />
            </div>
            <div>
                <label for="productSale">Sale</label>
                <Input id="productSale" type="number" name="sale" v-model="product.sale" min="0" max="90" />
            </div>
            <div>
                <label for="productQuantity">Quantity</label>
                <Input id="productQuantity" type="number" name="quantity" v-model="product.quantity" />
            </div>
            <div>
                <label for="productDescription">Description</label>
                <Input id="productDescription" name="description" v-model="product.description" />
            </div>
            <div>
                <label for="productCategory">Category</label>
                <CustomSelect v-model:selectedItem="product.category" :items="categories"
                    place-holder="Select Category..." />
            </div>
            <div>
                <label for="productColors">sizes</label>
                <CustomSelect v-if="product.category === 'shoes'" v-model:selectedItem="product.sizes" multiple
                    :category="product.category" :items="shoeSizes" place-holder="Select sizes..." />
                <CustomSelect v-else v-model:selectedItem="product.sizes" :items="clothSizes" multiple
                    :category="product.category" place-holder="Select sizes..." />
            </div>
            <div>
                <label for="productColors">Colors</label>
                <CustomSelect v-model:selectedItem="product.colors" :items="baseColors" multiple :is-colors="true"
                    place-holder="Select Colors..." />
            </div>
            <div>
                <label for="productPreview">Preview Image</label>
                <Input id="productPreview" type="file" accept="image/*" @change="handleImageChange"
                    class="h-[2.625rem] text-sm file:text-[13px] file:cursor-pointer file:rounded file:border file:border-neutral-400 file:bg-neutral-100 dark:file:bg-neutral-800 file:p-1 p-[6px]" />
            </div>
            <div>
                <label for="productPreview">Other Images</label>
                <Input id="productPreview" type="file" accept="image/*" multiple @change="handleImagesChange"
                    class="h-[2.625rem] text-sm file:text-[13px] file:cursor-pointer file:rounded file:border file:border-neutral-400 file:bg-neutral-100 dark:file:bg-neutral-800 file:p-1 p-[6px]" />
            </div>

            <!-- form actions -->
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