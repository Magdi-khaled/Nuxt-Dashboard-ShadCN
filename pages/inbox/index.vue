<script setup lang="ts">
const searchMessage = ref('');
const checkedItems = ref<number[]>([]);
const openItems = ref<number[]>([]);
const favItems = ref<number[]>([]);

const inbox = ref([
  {
    id: 1, title: 'Approve Product Request', message: `Your request for adding product to ours e-commerce inventory Your request for adding product to ours e-commerce inventory Your request for adding product to ours e-commerce inventory Your request for adding product to ours e-commerce inventory has been successfully approved`,
    date: 'Yesterday'
  },
  {
    id: 2, title: 'Reject Product Request', message: `Your request for adding product to ours e-commerce inventory has been successfully rejected`,
    date: '13 May 2025'
  },
  {
    id: 3, title: 'Pending Product Request', message: `Your request for adding product to ours e-commerce inventory is still pending`,
    date: '12 May 2025'
  },
]);

const toggleCheck = (id: number) => {
  if (checkedItems.value.includes(id)) {
    checkedItems.value = checkedItems.value.filter(item => item !== id);
  } else {
    checkedItems.value.push(id);
  }
}

const toggleFav = (id: number) => {
  if (favItems.value.includes(id)) {
    favItems.value = favItems.value.filter(item => item !== id);
  } else {
    favItems.value.push(id);
  }
}

const toggleOpen = (id: number) => {
  if (openItems.value.includes(id)) {
    openItems.value = openItems.value.filter(item => item !== id);
  } else {
    openItems.value.push(id);
  }
}
</script>

<template>
  <div class="my-4 h-[100dvh]">
    <header class="flex flex-wrap justify-between items-end gap-2 border-b pb-2">
      <label for="messageSearch" class="relative w-full sm:w-5/12">
        <Input id="messageSearch" type="text" placeholder="Search about Message..." class="w-full pl-9 text-sm"
          v-model="searchMessage" @Input="" />
        <!-- class="w-full sm:w-4/12 pl-9 text-sm" v-model="searchMessage" @Input="" /> -->
        <Icon name="tabler:message-search" class="absolute top-[19%] left-2 text-neutral-700 dark:text-neutral-100"
          size="22" />
      </label>
      <div class="sm:w-fit w-full flex justify-end">
        <p class="text-neutral-600 dark:text-neutral-200">All Inbox({{ inbox.length }})</p>
      </div>
    </header>
    <!-- --- -->
    <main class="w-full grid items-center my-2">
      <div v-for="(item, index) in inbox" :key="item.id" class="px-2 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800
        hover:shadow-xl hover:outline hover:outline-neutral-300 transition-all duration-150 "
        @click="toggleOpen(item.id)" :class="{ 'border-b': openItems.includes(item.id) }">

        <div class="flex gap-2">
          <label class="w-6 cursor-pointer flex items-center gap-2 text-neutral-600 dark:text-neutral-200">
            <input type="checkbox" class="hidden" />
            <Icon :name="checkedItems.includes(item.id) ? 'ic:round-check-box' : 'ic:round-check-box-outline-blank'"
              size="20" @click="toggleCheck(item.id)" />
          </label>
          <label class="w-6 cursor-pointer flex items-center gap-2 text-neutral-600 dark:text-neutral-200">
            <input type="checkbox" class="hidden" />
            <Icon :name="favItems.includes(item.id) ? 'solar:star-bold' : 'cuida:star-outline'" size="20"
              @click="toggleFav(item.id)"
              :title="!favItems.includes(item.id) ? 'Add to Favorites' : 'remove from Favorites'" />
          </label>
          <h2 class="sm:w-48 w-40 text-[14px] sm:text-[15px] whitespace-nowrap font-medium">{{ item.title }}</h2>
          <p class="w-7/12 sm:block hidden  text-ellipsis overflow-hidden pt-[2px] h-6">{{ item.message }}</p>
          <p class="grow text-end text-neutral-500 dark:text-neutral-300 whitespace-nowrap">{{ item.date }}</p>
        </div>
        <div v-if="openItems.includes(item.id)" class="w-full border-t-[1px] border-neutral-400 p-2 mt-2">
          <p>{{ item.message }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped lang="scss">
:deep(span) {
  &:hover {
    background-color: orange;
    transition: background 0.3s;
  }
}
</style>