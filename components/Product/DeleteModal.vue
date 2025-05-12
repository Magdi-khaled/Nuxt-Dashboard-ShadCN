<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import type IProduct from '~/types/useProduct';

const isModalValue = defineModel<boolean>('isModalValue');
const props = defineProps<{ product: IProduct }>();
</script>

<template>

    <ClientOnly>
        <AlertDialog v-model:open="isModalValue">
            <AlertDialogTrigger />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle />
                    <AlertDialogDescription class="text-[16px] font-medium text-neutral-700 dark:text-neutral-100">
                        Are you sure you want to delete <span>"{{ product?.product }}"</span> product?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel @click="isModalValue = false">Cancel</AlertDialogCancel>
                    <AlertDialogAction @click="isModalValue = false">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </ClientOnly>
</template>