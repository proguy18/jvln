<template>
  <div :class="['p-10', 'text-left', contentClass]">
    <!-- Heading with M PLUS Rounded 1c font -->
    <h1 class="mb-6 text-4xl font-mplus1p text-primary">{{ heading }}</h1>

    <!-- Description with Lato font -->
    <p v-if="description" class="mb-6 font-lato text-primary">
      {{ description }}
    </p>

    <!-- CTA with Lato font -->
    <a
      v-if="ctaText && ctaLink"
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
    contentClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.custom-class-to-center-content {
  @apply flex flex-col justify-center items-center;
}
</style>
