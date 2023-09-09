<template>
  <div class="flex justify-between space-x-4 overflow-x-auto">
    <div
      v-for="image in images"
      :key="image"
      class="cursor-pointer"
      @click="selectImage(image)"
    >
      <img
        :src="image"
        alt="Product Thumbnail"
        class="object-cover w-24 h-32 rounded-md shadow"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectImage(image) {
      this.$emit("selectImage", image);
    },
  },
};
</script>

<style>
/* You can add any additional styles if needed */
</style>
