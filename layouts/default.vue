<template>
    <div class="grid items-start lg:flex">
        <Sidebar />
        <div class="w-full p-2 lg:p-5 mb-16 lg:mb-0 grid gap-4 bg-[#fafafa] dark:bg-background">
            <slot />
        </div>
    </div>
</template>