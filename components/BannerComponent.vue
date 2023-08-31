<template>
  <div class="relative w-full overflow-hidden">
    <nuxt-link :to="bannerLink" class="block w-full">
      <picture>
        <source :srcset="mobileImage" media="(max-width: 440px)" />
        <source :srcset="tabletImage" media="(max-width: 768px)" />
        <source :srcset="laptopImage" media="(max-width: 1023px)" />
        <source :srcset="desktopImage" media="(max-width: 1360px)" />
        <img :src="defaultImage" alt="Banner" class="object-contain w-full" />
      </picture>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    mobileImage: String,
    tabletImage: String,
    laptopImage: String,
    desktopImage: String,
    defaultImage: String,
    bannerLink: {
      type: String,
      default: '#',
    },
  },
};
</script>
