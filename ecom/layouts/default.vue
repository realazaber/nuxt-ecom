<template>
  <UniversalNav />
  <div class="mt-12">
    <slot />
  </div>
  <UniversalFooter />
</template>

<style scss>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  * {
    @apply duration-200;
  }

  input {
    @apply placeholder:text-pri text-pri border-pri border-2 p-1;
  }

  section {
    @apply flex flex-col justify-center items-center;

    .container {
      @apply mx-auto w-4/5 p-5 flex flex-col justify-center items-center;

      h1,
      h2 {
        @apply text-pri font-extrabold;
      }

      h1 {
        @apply text-5xl;
      }

      h2 {
        @apply text-3xl;
      }

      p {
        @apply text-accent;
      }

      button {
        @apply px-5 py-3 border-2;
      }

      .btn-pri {
        @apply text-white bg-pri border-pri hover:bg-red-800;
      }

      .btn-sec {
        @apply text-pri bg-white border-pri hover:bg-slate-400;
      }
    }
  }
}
</style>

<script setup>
import cartStore from "../stores/cart";
</script>
