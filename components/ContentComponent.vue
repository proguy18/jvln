<template>
  <div class="p-4 text-left">
    <!-- Heading with M PLUS Rounded 1c font -->
    <h1 class="mb-4 text-4xl font-mplus1p text-primary">{{ heading }}</h1>

    <!-- Description with Lato font -->
    <p class="mb-4 font-lato text-primary">{{ description }}</p>

    <!-- CTA with Lato font -->
    <a
      :href="ctaLink"
      class="px-4 py-2 bg-transparent border rounded font-lato border-primary text-primary hover:bg-onPrimary"
    >
      {{ ctaText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    description: String,
    ctaText: String,
    ctaLink: {
      type: String,
      default: '#',
    },
  },
};
</script>
