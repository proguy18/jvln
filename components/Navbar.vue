<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center cursor-pointer">
      <span class="mr-1 text-green-500 text-x1">
      </span>
    </div>
    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <ul
      class="absolute w-full px-10 pb-10 duration-700 ease-linear bg-gray-900 md:flex md:items-center md:px-0 md:pb-0 md:static md:w-auto top-14"
      :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="my-6 md:mx-4 md:my-0" v-for="(link, index) in Links" :key="index">
        <a :href="link.link" class="text-xl hover:text-green-500">{{ link.name }}</a>
      </li>
      <HomeButton>JVLN</HomeButton>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomeButton from './HomeButton.vue'

export default {
  name: 'NavbarComponent', // Multi-word name
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
      open.value = !open.value;
    }

    return {
      open,
      Links,
      MenuOpen
    }
  },
}
</script>
