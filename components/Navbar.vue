<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow">
    <!-- Desktop View -->
    <div class="hidden md:flex md:flex-col md:items-center md:justify-center">
      <!-- First Row: Home Button -->
      <HomeButton class="mb-4">JVLN</HomeButton>
      <!-- Second Row: Links -->
      <ul class="flex space-x-4">
        <li v-for="(link, index) in Links" :key="index">
          <a :href="link.link" class="text-xl hover:text-green-500">{{ link.name }}</a>
        </li>
      </ul>
    </div>

    <!-- Mobile View -->
    <div class="flex items-center justify-between md:hidden">
      <!-- Spacer for left side to balance the menu icon on the right -->
      <div class="w-10 text-4xl"></div>
      <!-- Home Button -->
      <HomeButton>JVLN</HomeButton>
      <!-- Menu Toggle Icon -->
      <span @click="MenuOpen()" class="text-4xl cursor-pointer">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </span>
      <!-- Dropdown Menu for Links -->
      <ul class="absolute w-full px-10 pb-10 duration-200 ease-linear bg-gray-900 top-14"
        :class="[open ? 'right-0' : 'right-[-100%]']">
        <li class="my-6" v-for="(link, index) in Links" :key="index">
          <a :href="link.link" class="text-xl hover:text-green-500">{{ link.name }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import HomeButton from './HomeButton.vue'

export default {
  name: 'NavbarComponent',
  components: {
    HomeButton,
  },
  setup() {
    const open = ref(false)
    const Links = [
      { name: 'Home', link: '#' },
      { name: 'Products', link: '#' },
      { name: 'About Us', link: '#' },
      { name: 'Contact Us', link: '#' },
    ]

    function MenuOpen() {
      open.value = !open.value
    }

    return {
      open,
      Links,
      MenuOpen
    }
  },
}
</script>
