<template>
  <header class="bg-gray-800 text-white">
    <!-- Mobile View -->
    <nav v-if="isMobile" class="flex items-center justify-between p-4">
      <span @click="showMenu = !showMenu" class="cursor-pointer">🍔</span>
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
    </nav>

    <!-- Desktop View -->
    <nav v-else class="hidden md:flex items-center justify-around p-4">
      <nuxt-link to="/" class="px-4 py-2 hover:bg-gray-700">Home</nuxt-link>
      <nuxt-link to="/products" class="px-4 py-2 hover:bg-gray-700"
        >Products</nuxt-link
      >
      <nuxt-link to="/about" class="px-4 py-2 hover:bg-gray-700"
        >About Us</nuxt-link
      >
      <nuxt-link to="/contact" class="px-4 py-2 hover:bg-gray-700"
        >Contact Us</nuxt-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      isMobile: false,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },
  },
}
</script>

