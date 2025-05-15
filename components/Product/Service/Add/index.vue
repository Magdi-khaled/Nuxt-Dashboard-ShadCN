<script setup lang="ts">
const router = useRouter();
const { loading, categories, baseColors, clothSizes, shoeSizes } = useHelper();

interface IAProduct {
  preview: string;
  otherImages: string[];
  name: string;
  description: string;
  price: number;
  sale?: number;
  quantity: number;
  category: string;
  colors: string[];
  sizes: string[];
}
// const productID = ref<string>("5327Y");
const product = ref<IAProduct>({
  preview: "",
  otherImages: [],
  name: "",
  description: "",
  price: 0,
  sale: 0,
  colors: [],
  sizes: [],
  quantity: 0,
  category: "",
})
// const createdDate = ref<string>("");
// const preview = ref<string>("");
//   const otherImages = ref<string[]>([]);
//   const title = ref<string>("");
//   const description = ref<string>("");
//   const price = ref<number>();
//   const sale = ref<number>();
//   const colors = ref<string[]>([]);
//   const sizes = ref<string[]>([]);
//   const quantity = ref<number>();
//   const category = ref<string>("");

watch(() => product.value.category, (newVal) => {
  if (product.value.category === 'shoes' && newVal !== 'shoes')
    product.value.sizes = []
  else product.value.sizes = []
});

const addProduct = () => {
  try {
    console.log('product added');
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      // router.push(`/products/${productID.value}`);
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
  <div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-2">
    <form @submit.prevent="addProduct"
      class="col-span-3 sm:col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 p-4 bg-background rounded-lg shadow-sm border">
      <h1
        class="col-span-1 md:col-span-2 capitalize font-medium sm:text-[24px] text-[20px] border-b border-b-neutral-400 w-fit mb-2">
        add new product</h1>
      <div>
        <label for="productTitle">Title</label>
        <Input id="productTitle" name="title" v-model="product.name" placeholder="Enter product title" />
      </div>
      <div>
        <label for="productPrice">Price</label>
        <Input id="productPrice" type="number" name="price" v-model="product.price" placeholder="Enter product price" />
      </div>
      <div>
        <label for="productSale">Discount %</label>
        <Input id="productSale" type="number" name="sale" v-model="product.sale" min="0" max="90"
          placeholder="Enter product discount (0 ~ 90)%" />
      </div>
      <div>
        <label for="productQuantity">Quantity</label>
        <Input id="productQuantity" type="number" name="quantity" v-model="product.quantity"
          placeholder="How many in stock?" />
      </div>
      <div>
        <label for="productDescription">Description</label>
        <Input id="productDescription" name="description" v-model="product.description"
          placeholder="Enter product micro description" />
      </div>
      <div>
        <label for="productCategory">Category</label>
        <CustomSelect v-model:selectedItem="product.category" :items="categories" place-holder="Select Category..." />
      </div>
      <div>
        <label for="productColors">Sizes</label>
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
          class="h-[2.625rem] text-sm file:text-[13px] file:cursor-pointer
          file:rounded file:border file:border-neutral-400 file:bg-neutral-300 dark:file:bg-neutral-700 file:p-1 p-[6px]" />
      </div>
      <div>
        <label for="productPreview">Other Images</label>
        <Input id="productPreview" type="file" accept="image/*" multiple @change="handleImagesChange" class="h-[2.625rem] text-sm file:text-[13px] file:cursor-pointer file:rounded file:border file:border-neutral-400
          file:bg-neutral-300 dark:file:bg-neutral-700 file:p-1 p-[6px]" />
      </div>

      <!-- form actions -->
      <div class="col-span-1 md:col-span-2 flex gap-2 justify-end my-2">
        <Button variant="outline" @click="router.push({ name: 'products' })" class="px-4">Cancel</Button>
        <Button @click="addProduct" :disabled="loading">
          <p v-if="!loading" class="px-4">Add</p>
          <Spinner v-else />
        </Button>
      </div>
    </form>
    <ProductServiceAddPreview v-model:product="product" />
  </div>
</template>