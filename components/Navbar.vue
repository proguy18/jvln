<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 shadow">
    <!-- Desktop View -->
    <div class="hidden md:flex md:flex-col md:items-center md:justify-center">
      <!-- First Row: Home Button -->
      <HomeButton class="mb-4" />
      <!-- Second Row: Links -->
      <ul class="flex space-x-40">
        <li v-for="(link, index) in Links" :key="index">
          <nuxt-link
            :to="link.link"
            class="text-xl"
            :class="
              hoveredIndices.length > 0
                ? hoveredIndices.includes(index)
                  ? 'text-primary'
                  : 'text-onPrimary'
                : 'text-primary font-mplus1p'
            "
            @mouseover="hoverLink(index)"
            @mouseleave="leaveLink(index)"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- Mobile View -->
    <div class="flex items-center justify-between md:hidden">
      <!-- Spacer for left side to balance the menu icon on the right -->
      <div class="w-10 text-4xl"></div>
      <!-- Home Button -->
      <HomeButton class="pl-6" />
      <!-- Menu Toggle Icon -->
      <span class="pr-6 text-4xl cursor-pointer" @click="MenuOpen()">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </span>
      <!-- Dropdown Menu for Links -->
      <ul
        class="absolute z-50 w-screen px-10 pb-2 transition-transform duration-200 ease-linear transform bg-gray-900"
        style="top: 5.75rem"
        :class="{ 'translate-x-0': open, 'translate-x-full': !open }"
      >
        <li v-for="(link, index) in Links" :key="index">
          <nuxt-link :to="link.link" class="text-xl text-white">
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HomeButton from './HomeButton.vue';

export default {
  name: 'NavbarComponent',
  components: {
    HomeButton,
  },
  setup() {
    const open = ref(false);
    const hoveredIndices = ref([]);
    const Links = [
      { name: 'PRODUCTS', link: '/products' },
      { name: 'OUR STORY', link: '/our-story' },
      { name: 'TESTIMONIALS', link: '/testimonials' },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }

    function hoverLink(index) {
      hoveredIndices.value.push(index);
    }

    function leaveLink(index) {
      const idx = hoveredIndices.value.indexOf(index);
      if (idx > -1) {
        hoveredIndices.value.splice(idx, 1);
      }
    }

    return {
      open,
      Links,
      MenuOpen,
      hoveredIndices,
      hoverLink,
      leaveLink,
    };
  },
};
</script>
