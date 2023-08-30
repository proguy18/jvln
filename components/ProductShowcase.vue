<!-- ProductShowcase.vue -->
<template>
  <div>
    <!-- Title -->
    <div v-if="title">
      <p class="mb-4 text-4xl text-center font-mplus1p text-primary">
        {{ title }}
      </p>
    </div>
    <!-- Description -->
    <div v-if="description">
      <p class="mb-4 text-center text-onPrimary">{{ description }}</p>
    </div>
    <!-- Product Grid -->
    <section class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MainProduct
        v-for="product in products"
        :key="product.id"
        :main-product="product"
      />
    </section>
  </div>
</template>

<script>
import MainProduct from '@/components/MainProduct.vue';

export default {
  components: {
    MainProduct,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
