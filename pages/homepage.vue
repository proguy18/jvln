<template>
    <div class="min-h-screen bg-background">
      <!-- Header -->
      <header class="bg-primary text-onPrimary p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-montserrat">Jovelin Candles</h1>
          <!-- For Desktop -->
          <nav class="hidden md:flex space-x-4">
            <a href="#" class="hover:underline">Home</a>
            <a href="#" class="hover:underline">Products</a>
            <a href="#" class="hover:underline">About Us</a>
            <a href="#" class="hover:underline">Contact Us</a>
          </nav>
          <!-- For Mobile -->
          <button @click="showMenu = !showMenu" class="md:hidden">
            <!-- Hamburger Icon -->
            ☰
          </button>
        </div>
        <!-- Mobile Nav Menu -->
        <div v-if="showMenu" class="md:hidden bg-secondary mt-2 p-4">
          <nav>
            <a href="#" class="block mb-2 hover:underline">Home</a>
            <a href="#" class="block mb-2 hover:underline">Products</a>
            <a href="#" class="block mb-2 hover:underline">About Us</a>
            <a href="#" class="block mb-2 hover:underline">Contact Us</a>
          </nav>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="container mx-auto p-4">
        <!-- You can start building your main content here. Maybe a hero section with an image of a candle or a picture of you two, followed by some product listings disguised as candles but are actually your photos. -->
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false
      };
    }
  };
  </script>
  