<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
    <div class="absolute right-6 top-10 sm:hidden">
    <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
<nav class="flex items-center justify-between bg-slate-800 p-6">
  <div class="flex items-center flex-col sm:flex-row w-full">
    <router-link to="/">
  <div class="flex items-center flex-no-shrink text-white">
    <svg class="h-8 w-8 mr-2 fill-red-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-20 pb-1 font-semibold text-xl tracking-tight">Locafilmes</span>
  </div>
</router-link>
  <div :class="menuOpen ? 'block' : 'hidden'" class="w-full block flex-grow sm:flex items-center w-auto">
    <div class="text-base sm:flex-grow">
      <router-link to="/catalog" class="block mt-4 sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        Catálogo
      </router-link>
      <router-link to="/about" class="block mt-4 sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        Sobre
      </router-link>
      <router-link to="/contact" class="block mt-4 sm:inline-block lg:mt-0 text-gray-200 hover:text-white">
        Contato
      </router-link>
    </div>
      <router-link to="/login" class=" text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-slate-500 mt-4 lg:mt-0">Minha conta</router-link>
  </div>
</div>
</nav>
<div class="floating-button">
      <a href="https://wa.me/+5511964453568" target="_blank">
        <img src="../../public/images/watsLogo.png" alt="WhatsApp" />
      </a>
    </div>
</template>
