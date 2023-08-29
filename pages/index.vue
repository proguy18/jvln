<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <Navbar />
    <!-- Main Content -->
    <main class="container p-4 mx-auto">
      <div class="sections-list">
        <div
          class="container flex flex-col items-center gap-4 px-4 pt-8 mx-auto mt-8 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
        >
          <!-- Banner/Image -->
          <div class="md:col-span-3 lg:col-span-8">
            <BannerComponent
              :mobileImage="bannerData.mobileImage"
              :tabletImage="bannerData.tabletImage"
              :laptopImage="bannerData.laptopImage"
              :desktopImage="bannerData.desktopImage"
              :defaultImage="bannerData.defaultImage"
              :bannerLink="bannerData.link"
            />
          </div>
          <!-- Content -->
          <div
            class="text-left md:col-span-3 lg:col-span-4 col-content px-section"
          >
            <ContentComponent
              :heading="contentData.heading"
              :description="contentData.description"
              :ctaText="contentData.ctaText"
              :ctaLink="contentData.ctaLink"
            />
          </div>
        </div>
      </div>
      <!-- Hero Image -->
      <div class="mb-6">
        <!-- <img src="@/assets/hero-image.jpg" alt="Romantic Candle Setting" class="w-full mb-4 rounded-md shadow-lg"> -->
        <p class="text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <!-- Product Showcase -->
      <section
        class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <MainProduct
          v-for="product in products"
          :key="product.id"
          :mainProduct="product"
        />
      </section>
      <!-- Behind the Scenes -->
      <div class="mb-6">
        <!-- <img src="@/assets/joey-crafting.jpg" alt="Joey Crafting Candles" class="w-full mb-4 rounded-md shadow-lg"> -->
        <p class="text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur elit.
        </p>
      </div>
      <!-- Testimonials -->
      <section class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="w-full mb-4 rounded-md shadow-lg"
          />
          <p class="text-center">{{ testimonial.quote }}</p>
        </div>
      </section>
      <!-- About Us -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">About Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          facilisis urna. Praesent ac gravida libero. Donec non odio justo.
        </p>
      </section>
      <!-- Featured Products -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Products</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Product cards here -->
        </div>
      </section>
      <!-- Reviews -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Reviews</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Review cards or quotes here -->
        </div>
      </section>
      <!-- Newsletter Signup -->
      <section class="p-6 my-12 bg-gray-200 rounded-md">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form class="mt-4">
          <input
            type="email"
            placeholder="Your email address"
            class="p-2 mr-2 rounded-md"
          />
          <button type="submit" class="p-2 text-white bg-blue-500 rounded-md">
            Subscribe
          </button>
        </form>
      </section>
      <!-- Blog or Updates -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Journal</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Blog cards or update snippets here -->
        </div>
      </section>
      <!-- Contact Information -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          facilisis urna.
        </p>
      </section>
      <!-- Social Media Links -->
      <section class="flex my-12 space-x-4">
        <!-- Social media icons linking to profiles -->
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import MainProduct from '@/components/MainProduct.vue';
export default {
  components: {
    BannerComponent,
    ContentComponent,
    Navbar,
    MainProduct,
  },
  data() {
    return {
      bannerData: {
        image:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        mobileImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
        tabletImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
        laptopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        desktopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        defaultImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        // link: '/#'
      },
      contentData: {
        heading: 'Lorem Ipsum Dolor',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna.',
        ctaText: 'DISCOVER MORE',
        // ctaLink: '/your-cta-link'
      },
      products: [
        // Add your product details here
        {
          id: 1,
          name: 'Lorem Ipsum One',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          link: '#',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          description: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          name: 'Lorem Ipsum Two',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          link: '#',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Consectetur adipiscing elit.',
        },
        {
          id: 3,
          name: 'Lorem Ipsum Three',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-3.jpg',
          link: '#',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Sed sit amet facilisis urna.',
        },
        {
          id: 4,
          name: 'Lorem Ipsum Four',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-2.jpg',
          link: '#',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Praesent ac gravida libero.',
        },
        // ... more products
      ],
      testimonials: [
        // Add your testimonial details here
        // {
        //     id: 1,
        //     name: 'Lorem Ipsum',
        //     image: '@/assets/testimonial1.jpg',
        //     quote: 'Lorem ipsum dolor sit amet!',
        // },
        // ... more testimonials
      ],
    };
  },
};
</script>
