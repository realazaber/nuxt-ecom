<template>
  <section class="h-[80vh]">
    <div class="container">
      <div class="hero">
        <h1>Fusing Fashion and Comfort</h1>
        <div class="flex justify-center items-center mt-5 gap-3">
          <nuxt-link to="/products"
            ><button class="btn-pri">See Products</button></nuxt-link
          >
          <nuxt-link to="/about"
            ><button class="btn-sec">About us</button></nuxt-link
          >
        </div>
      </div>
      <div v-for="product in data" :key="product.id">
        {{ product.title }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import IProduct from "../interfaces/IProduct";
import baseUrl from "../helper";

const products = ref<IProduct[]>([]);

onMounted(async () => {
  const { data } = await useFetch(baseUrl + "/products");
  products.value = data;
  console.log(products);
});
</script>
