<template>
  <div class="p-6 bg-white">
    <!-- Product Gallery -->
    <div class="flex flex-col items-center space-y-4">
      <img
        :src="selectedImage"
        alt="Selected Product Image"
        class="object-cover w-full rounded-md shadow-lg h-96"
      />
      <ProductGallery
        :images="product.images"
        @selectImage="updateSelectedImage"
      />
    </div>

    <!-- Product Info -->
    <div class="mt-8 space-y-4">
      <h1 class="text-2xl font-bold text-primary font-mplus1p">
        {{ product.name }}
      </h1>
      <span class="block text-xl text-primary font-lato">{{
        product.type
      }}</span>
      <p class="text-onPrimary font-lato">{{ product.description }}</p>
      <div class="text-2xl font-semibold text-primary font-lato">
        {{ product.price }} €
      </div>
      <button
        class="w-full py-2 bg-blue-500 rounded-md text-primary hover:bg-blue-600 font-lato"
      >
        Add to Bag
      </button>
    </div>
  </div>
</template>

<script>
import ProductGallery from '~/components/ProductGallery.vue';

export default {
  components: {
    ProductGallery,
  },
  data() {
    return {
      selectedImage:
        'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
    };
  },
  methods: {
    updateSelectedImage(image) {
      this.selectedImage = image;
    },
  },
  asyncData({ params }) {
    // Hardcoded product data
    const products = [
      {
        id: '1',
        name: 'Product 1',
        type: 'Type 1',
        description: 'Description for Product 1',
        price: '56',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-3.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          // ... more images for Product 1
        ],
      },
      {
        id: '2',
        name: 'Product 2',
        type: 'Type 2',
        description: 'Description for Product 2',
        price: '56',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-3.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          // ... more images for Product 1
        ],
      },
      {
        id: '3',
        name: 'Product 3',
        type: 'Type 3',
        description: 'Description for Product 3',
        price: '56',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-3.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          // ... more images for Product 1
        ],
      },
      {
        id: '4',
        name: 'Product 4',
        type: 'Type 4',
        description: 'Description for Product 4',
        price: '56',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-3.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          // ... more images for Product 1
        ],
      },
      // ... other products
    ];

    const product = products.find((p) => String(p.id) === String(params.id));
    console.log(product);
    return { product };
  },
};
</script>
