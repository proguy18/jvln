<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <Navbar />
    <!-- Main Content -->
    <main class="container p-4 mx-auto">
      <!-- Hero Image -->
      <div class="mb-6">
        <!-- <img src="@/assets/hero-image.jpg" alt="Romantic Candle Setting" class="w-full mb-4 rounded-md shadow-lg"> -->
        <p class="pt-12 my-2 text-4xl text-center font-mplus1p text-primary">
          OUR CUSTOMLY CURATED PRODUCTS
        </p>
      </div>
      <!-- Product Showcase -->
      <section
        class="grid grid-cols-2 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <MainProduct
          v-for="product in products"
          :key="product.id"
          :main-product="product"
        />
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
      <!-- Contact Information -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold font-mplus1p text-primary">
          FOLLOW US
        </h2>
        <p text-primary>
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
// import BannerComponent from '@/components/BannerComponent.vue';
// import ContentComponent from '@/components/ContentComponent.vue';
import MainProduct from '@/components/MainProduct.vue';
export default {
  components: {
    // BannerComponent,
    // ContentComponent,
    Navbar,
    MainProduct,
  },
  data() {
    return {
      //   bannerData: {
      //     image:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
      //     mobileImage:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
      //     tabletImage:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
      //     laptopImage:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
      //     desktopImage:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
      //     defaultImage:
      //       'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
      //     // link: '/#'
      //   },
      //   introductionData: {
      //     heading: 'THE GOOD, THE BEAUTIFUL, THE USEFUL',
      //     description:
      //       'This is the philosophy of La Droguerie, a collection of household products designed to elevate the everyday in a sustainable way.',
      //     ctaText: 'DISCOVER MORE',
      //     // ctaLink: '/your-cta-link'
      //   },
      //   storyData: {
      //     heading: 'METICULOUSLY HANDCRAFTED',
      //     // description: '',
      //     // ctaText: 'DISCOVER MORE',
      //     // ctaLink: '/your-cta-link'
      //   },
      //   aboutUsData: {
      //     heading: 'A PASSION FOR LOVE',
      //     description: 'Dolce dest decorum est Lorem Ipsum quick brown fox',
      //     ctaText: 'LEARN MORE',
      //     // ctaLink: '#'
      //   },
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
