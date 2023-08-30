<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow">
    <!-- Desktop View -->
    <div class="hidden md:flex md:flex-col md:items-center md:justify-center">
      <!-- First Row: Home Button -->
      <HomeButton class="mb-4" />
      <!-- Second Row: Links -->
      <ul class="flex space-x-40">
        <li v-for="(link, index) in Links" :key="index">
          <a
            :href="link.link"
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
          </a>
        </li>
      </ul>
    </div>
    <!-- Mobile View -->
    <div class="flex items-center justify-between md:hidden">
      <!-- Spacer for left side to balance the menu icon on the right -->
      <div class="w-10 text-4xl"></div>
      <!-- Home Button -->
      <HomeButton />
      <!-- Menu Toggle Icon -->
      <span class="text-4xl cursor-pointer" @click="MenuOpen()">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </span>
      <!-- Dropdown Menu for Links -->
      <ul
        class="absolute w-full px-10 pb-1 duration-200 ease-linear bg-gray-900"
        style="top: 5.75rem"
        :class="[open ? 'right-0' : 'right-[-100%]']"
      >
        <li v-for="(link, index) in Links" :key="index">
          <a :href="link.link" class="text-xl text-white">
            {{ link.name }}
          </a>
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
      { name: 'ABOUT US', link: '#' },
      { name: 'CONTACT US', link: '#' },
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
