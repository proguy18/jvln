<template>
  <div class="mainProduct">
    <nuxt-link :to="mainProduct.link">
      <div class="relative w-full h-64 overflow-hidden rounded-md shadow-lg">
        <!-- Base Image -->
        <div
          class="absolute inset-0 bg-center bg-cover"
          :style="{ backgroundImage: `url(${mainProduct.image})` }"
        ></div>

        <!-- Hover Image -->
        <div
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-center bg-cover hoverImage"
          :style="{ backgroundImage: `url(${mainProduct.hoverImage})` }"
        ></div>
      </div>
      <p class="mt-2 text-left text-primary">{{ mainProduct.name }}</p>
      <p class="mt-1 text-left text-onPrimary">{{ mainProduct.description }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    mainProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Base image is always visible */
.mainProduct .absolute {
  opacity: 1;
}

/* Hover image is fully visible by default and becomes transparent on hover */
.mainProduct .hoverImage {
  opacity: 1;
}

.mainProduct:hover .hoverImage {
  opacity: 0;
}
</style>
