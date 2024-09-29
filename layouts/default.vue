
import { NuxtLink } from '#build/components';
<template>
    <div id="root">
      <slot />
    </div>
</template>

<style>
#root {
    @apply container m-auto mt-4 px-4 pb-32 xl:px-32 text-base md:text-md selection:bg-violet-300;
   
    a::selection {
        @apply bg-white text-violet-300;
    }
}

a {
    @apply text-violet-300 bg-black hover:text-white;
}

code {
    @apply rounded px-2 text-base text-white bg-violet-600;
}

hr {
    @apply my-10;
}
</style>