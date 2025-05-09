<template>
    <div class="grid items-start lg:flex">
        <Sidebar />
        <div class="w-full p-5 grid gap-4 bg-[#fafafa] dark:bg-background">
            <slot />
        </div>
    </div>
</template>