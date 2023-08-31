<template>
  <!-- Main Container -->
  <div class="container p-4 mx-auto">
    <div class="px-4 mx-auto mt-5">
      <!-- Main Product Container -->
      <div
        class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4"
      >
        <!-- Left Side: Image + Gallery -->
        <div class="relative space-y-4 md:w-1/2">
          <!-- Image Wrapper (for portrait cropping) -->
          <div
            class="relative w-full max-w-md overflow-hidden rounded-md shadow-lg h-[500px] mb-4"
          >
            <!-- Actual Product Image -->
            <img
              :src="selectedImage"
              alt="Selected Product Image"
              class="object-cover w-full h-full"
            />
            <!-- Previous Image Arrow -->
            <div
              @click="prevImage"
              class="absolute w-8 h-8 p-2 transform -translate-y-1/2 bg-white rounded-full cursor-pointer top-1/2 left-4 bg-opacity-40 backdrop-blur-md"
              style="user-select: none"
            >
              <img
                src="~@/assets/svgs/arrow-left.svg"
                alt="Left Arrow"
                class="w-full h-full"
              />
            </div>
            <!-- Next Image Arrow -->
            <div
              @click="nextImage"
              class="absolute w-8 h-8 p-2 transform -translate-y-1/2 bg-white rounded-full cursor-pointer top-1/2 right-4 bg-opacity-40 backdrop-blur-md"
              style="user-select: none"
            >
              <img
                src="~@/assets/svgs/arrow-right.svg"
                alt="Right Arrow"
                class="w-full h-full"
              />
            </div>
          </div>
          <!-- Product Gallery Component -->
          <ProductGallery
            :images="product.images"
            @selectImage="updateSelectedImage"
          />
        </div>
        <!-- Right Side: Texts and Details -->
        <div class="flex flex-col justify-between space-y-4 md:w-1/2 h-128">
          <div>
            <!-- Product Name -->
            <h1 class="text-2xl font-bold text-primary font-mplus1p">
              {{ product.name }}
            </h1>
            <!-- Product Type -->
            <span class="block text-xl text-primary font-lato">{{
              product.type
            }}</span>
            <!-- Product Description -->
            <p class="text-onPrimary font-lato">{{ product.description }}</p>
          </div>
          <div>
            <!-- Product Price -->
            <div class="text-2xl font-semibold text-primary font-lato">
              {{ product.price }} €
            </div>
            <!-- Add to Bag Button -->
            <button
              class="w-full py-2 bg-blue-500 rounded-md text-primary hover:bg-blue-600 font-lato"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
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
    prevImage() {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      if (currentIndex > 0) {
        this.selectedImage = this.product.images[currentIndex - 1];
      }
    },
    nextImage() {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      if (currentIndex < this.product.images.length - 1) {
        this.selectedImage = this.product.images[currentIndex + 1];
      } else {
        this.selectedImage = this.product.images[0]; // Cycle back to the first image
      }
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
