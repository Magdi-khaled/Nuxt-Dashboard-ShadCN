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
const { loading, open } = useHelper();

</script>

<template>
    <ClientOnly>
        <AlertDialog :open="open">
            <AlertDialogTrigger @click="open = true">
                <Button>Add new product</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create a new product</AlertDialogTitle>
                    <AlertDialogDescription class="grid lg:grid-cols-2 gap-4">
                        <Input placeholder="Enter product title" />
                        <Input placeholder="Enter product title" />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
                    <AlertDialogAction @click="open = false">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </ClientOnly>
</template>
