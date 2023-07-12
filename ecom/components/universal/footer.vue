<template>
  <footer
    class="w-full bg-pri text-white flex flex-row flex-wrap justify-between items-center p-3"
  >
    <div class="w-1/2">
      <nuxt-link to="/"
        ><h1 class="text-5xl font-bold">Fashion Fusion</h1></nuxt-link
      >
    </div>
    <div class="flex flex-col gap-5 text-right w-1/2">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/products">Products</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </footer>
  <div class="w-full bg-red-700 p-3 text-white text-center">
    <a href="https://azaber.com/" target="_blank">Made by Azaber</a>
  </div>
</template>
