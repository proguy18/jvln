<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto p-4">
      <!-- Desktop View -->
      <nav class="hidden md:flex items-center justify-between">
        <nuxt-link to="/" class="mr-4 hover:bg-gray-600 px-2 py-1"
          >Home</nuxt-link
        >
        <nuxt-link to="/products" class="mr-4 hover:bg-gray-600 px-2 py-1"
          >Products</nuxt-link
        >
        <nuxt-link to="/about" class="mr-4 hover:bg-gray-600 px-2 py-1"
          >About Us</nuxt-link
        >
        <nuxt-link to="/contact" class="hover:bg-gray-600 px-2 py-1"
          >Contact Us</nuxt-link
        >
      </nav>

      <!-- Mobile View -->
      <div class="md:hidden flex items-center justify-between">
        <div class="cursor-pointer" @click="showMenu = !showMenu">
          <i class="fa fa-bars"></i>
        </div>

        <div
          v-if="showMenu"
          class="absolute top-0 left-0 w-full bg-gray-700 mt-12"
        >
          <nuxt-link to="/" class="block p-4 hover:bg-gray-600">Home</nuxt-link>
          <nuxt-link to="/products" class="block p-4 hover:bg-gray-600"
            >Products</nuxt-link
          >
          <nuxt-link to="/about" class="block p-4 hover:bg-gray-600"
            >About Us</nuxt-link
          >
          <nuxt-link to="/contact" class="block p-4 hover:bg-gray-600"
            >Contact Us</nuxt-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
