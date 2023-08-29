<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <Navbar />
    <!-- Main Content -->
    <main class="container p-4 mx-auto">
      <div class="sections-list">
        <div
          class="container flex flex-col items-center gap-4 px-4 pt-8 mx-auto mt-8 md:flex-row md:grid md:grid-cols-6 md:px-8">
          <!-- Banner/Image -->
          <div class="md:col-span-3">
            <BannerComponent :mobileImage="bannerData.mobileImage" :tabletImage="bannerData.tabletImage"
              :laptopImage="bannerData.laptopImage" :desktopImage="bannerData.desktopImage"
              :defaultImage="bannerData.defaultImage" :bannerLink="bannerData.link" />
          </div>
          <!-- Content -->
          <div class="text-center md:col-span-3 col-content px-section">
            <ContentComponent :heading="contentData.heading" :description="contentData.description"
              :ctaText="contentData.ctaText" :ctaLink="contentData.ctaLink" />
          </div>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="mb-6">
        <!-- <img src="@/assets/hero-image.jpg" alt="Romantic Candle Setting" class="w-full mb-4 rounded-md shadow-lg"> -->
        <p class="text-lg text-center">Illuminate your moments with JVLN.</p>
      </div>

      <!-- Product Showcase -->
      <section class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="product in products" :key="product.id">
          <a :href="product.link">
            <img :src="product.image" :alt="product.name" class="w-full transition rounded-md shadow-lg hover:opacity-90">
            <p class="mt-2 text-center">{{ product.name }}</p>
          </a>
        </div>
      </section>

      <!-- Behind the Scenes -->
      <div class="mb-6">
        <!-- <img src="@/assets/joey-crafting.jpg" alt="Joey Crafting Candles" class="w-full mb-4 rounded-md shadow-lg"> -->
        <p class="text-lg text-center">Each candle is handcrafted with love by Joey.</p>
      </div>

      <!-- Testimonials -->
      <section class="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
          <img :src="testimonial.image" :alt="testimonial.name" class="w-full mb-4 rounded-md shadow-lg">
          <p class="text-center">{{ testimonial.quote }}</p>
        </div>
      </section>
      <!-- About Us -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">About JVLN Lumière</h2>
        <p>
          Born from the passion of two souls, JVLN is more than just a candle brand. Each candle tells a story, a
          memory, a moment shared between Joey and Evelin. Dive into the world of JVLN and discover the luminescence of
          love.
        </p>
      </section>

      <!-- Featured Products -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Featured Products</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Product cards here -->
        </div>
      </section>

      <!-- Reviews -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">What Our Customers Say</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Review cards or quotes here -->
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="p-6 my-12 bg-gray-200 rounded-md">
        <h2 class="mb-4 text-2xl font-bold">Stay Updated</h2>
        <p>Join our newsletter to get the latest updates, promotions, and stories from JVLN Lumière.</p>
        <form class="mt-4">
          <input type="email" placeholder="Your email address" class="p-2 mr-2 rounded-md">
          <button type="submit" class="p-2 text-white bg-blue-500 rounded-md">Subscribe</button>
        </form>
      </section>

      <!-- Blog or Updates -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">From Our Journal</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Blog cards or update snippets here -->
        </div>
      </section>

      <!-- Contact Information -->
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold">Get in Touch</h2>
        <p>Have questions or just want to say hello? Reach out to us at <a
            href="mailto:info@jvlnlumiere.com">info@jvlnlumiere.com</a>.</p>
      </section>

      <!-- Social Media Links -->
      <section class="flex my-12 space-x-4">
        <!-- Social media icons linking to profiles -->
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
export default {
  components: {
    BannerComponent,
    ContentComponent,
    Navbar,
  },
  data() {
    return {
      bannerData: {
        image: 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        mobileImage: 'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
        tabletImage: 'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1693301320/samples/animals/three-dogs.jpg',
        laptopImage: 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        desktopImage: 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        defaultImage: 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301320/samples/animals/three-dogs.jpg',
        // link: '/#'
      },
      contentData: {
        heading: 'THE GOOD, THE BEAUTIFUL, THE USEFUL',
        description: 'This is the philosophy of La Droguerie, a collection of household products designed to elevate the everyday in a sustainable way.',
        ctaText: 'DISCOVER THE COLLECTION',
        // ctaLink: '/your-cta-link'
      },
      products: [
        // Add your product details here
        // { id: 1, name: 'Candle 1', image: '@/assets/candle1.jpg', link: '/product/1' },
        // ... more products
      ],
      testimonials: [
        // Add your testimonial details here
        // { id: 1, name: 'Joey & Evelin', image: '@/assets/testimonial1.jpg', quote: 'We love these candles!' },
        // ... more testimonials
      ],
    }
  },
}
</script>
