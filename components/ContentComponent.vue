<template>
  <div :class="['p-10', 'text-left', contentClass]">
    <!-- Heading with M PLUS Rounded 1c font -->
    <h1 class="mb-6 text-4xl font-mplus1p text-primary">{{ heading }}</h1>

    <!-- Description with Lato font -->
    <!-- Check if description is a string -->
    <p v-if="isStringDescription" class="mb-6 font-lato text-primary">
      {{ description }}
    </p>

    <!-- Check if description is an array -->
    <pre
      v-else-if="isArrayDescription"
      class="mb-6 whitespace-pre-line font-lato text-primary"
    >
  {{ description.join('\n\n') }}
</pre
    >

    <!-- CTA with Lato font -->
    <nuxt-link
      v-if="ctaText && ctaLink"
      :to="ctaLink"
      class="px-4 py-2 bg-transparent border rounded font-lato border-primary text-primary hover:bg-onPrimary"
    >
      {{ ctaText }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    description: [String, Array], // Allow both String and Array
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
  computed: {
    isStringDescription() {
      return typeof this.description === 'string';
    },
    isArrayDescription() {
      return Array.isArray(this.description);
    },
  },
};
</script>

<style scoped>
.custom-class-to-center-content {
  @apply flex flex-col justify-center items-center;
}
</style>
