<template>
  <div class="bg-gray-900 text-gray-100 py-3.5 shadow">
    <!-- Desktop View -->
    <div class="hidden md:flex md:flex-col md:items-center md:justify-center">
      <!-- First Row: Home Button -->
      <HomeButton class="mb-4" />
      <!-- Second Row: Links -->
      <ul class="flex space-x-40">
        <li
          v-for="(link, index) in Links"
          :key="index"
          @mouseover="hoverLink(index)"
          @mouseleave="leaveLink"
        >
          <nuxt-link
            :to="link.link"
            class="text-xl navbar-link"
            :class="{
              'text-onHover': hoveredIndex !== -1 && hoveredIndex !== index,
            }"
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
import { ref } from "vue";
import HomeButton from "./HomeButton.vue";

export default {
  name: "NavbarComponent",
  components: {
    HomeButton,
  },
  setup() {
    const open = ref(false);
    const hoveredIndex = ref(-1); // -1 indicates no link is hovered
    // const hoveredIndex = ref(-1); // -1 indicates no link is hovered

    const Links = [
      { name: "PRODUCTS", link: "/products" },
      { name: "OUR STORY", link: "/our-story" },
      { name: "TESTIMONIALS", link: "/testimonials" },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }

    function hoverLink(index) {
      hoveredIndex.value = index;
    }

    function leaveLink() {
      hoveredIndex.value = -1;
    }

    return {
      open,
      Links,
      MenuOpen,
      hoveredIndex, // Return the new ref
      hoverLink, // Return the new method
      leaveLink, // Return the new method
    };
  },
};
</script>

<style>
/* When not hovering over the list, all links will have the primary color */
.navbar-link {
  transition: color 0.3s ease; /* Smooth color transition */
  color: #f5f5f5; /* Default color */
}

.text-onHover {
  color: rgba(100, 100, 100, 0.9);
}

.text-primary {
  color: #f5f5f5;
}
</style>
