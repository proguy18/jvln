<template>
  <!-- Main Content -->
  <main class="container p-4 mx-auto">
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="md:col-span-3 lg:col-span-8">
        <BannerComponent
          :mobile-image="bannerData.mobileImage"
          :tablet-image="bannerData.tabletImage"
          :laptop-image="bannerData.laptopImage"
          :desktop-image="bannerData.desktopImage"
          :default-image="bannerData.defaultImage"
          :banner-link="bannerData.link"
        />
      </div>
      <!-- Content -->
      <div class="text-left md:col-span-3 lg:col-span-4 col-content px-section">
        <ContentComponent
          :heading="introductionData.heading"
          :description="introductionData.description"
          :cta-text="introductionData.ctaText"
          :cta-link="introductionData.ctaLink"
        />
      </div>
    </div>

    <div class="mt-8">
      <ProductShowcase
        :products="products"
        title="BEST SELLERS"
        description="A collection of our most popular items."
      />
    </div>
    <!-- Behind the Scenes -->
    <div class="mb-6">
      <!-- <img src="@/assets/joey-crafting.jpg" alt="Joey Crafting Candles" class="w-full mb-4 rounded-md shadow-lg"> -->
      <p class="text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur elit.
      </p>
    </div>
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="col-span-full md:col-span-6 lg:col-span-8">
        <BannerComponent
          :mobile-image="bannerData.mobileImage"
          :tablet-image="bannerData.tabletImage"
          :laptop-image="bannerData.laptopImage"
          :desktop-image="bannerData.desktopImage"
          :default-image="bannerData.defaultImage"
          :banner-link="bannerData.link"
        />
      </div>
      <!-- Content -->
      <div
        class="text-left col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
      >
        <ContentComponent
          :heading="storyData.heading"
          content-class="custom-class-to-center-content"
        />
      </div>
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
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <!-- Content -->
        <div
          class="text-left md:col-span-3 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="aboutUsData.heading"
            :description="aboutUsData.description"
            :cta-text="aboutUsData.ctaText"
            :cta-link="aboutUsData.ctaLink"
          />
        </div>
        <!-- Banner/Image -->
        <div class="md:col-span-3 lg:col-span-8">
          <BannerComponent
            :mobile-image="bannerData.mobileImage"
            :tablet-image="bannerData.tabletImage"
            :laptop-image="bannerData.laptopImage"
            :desktop-image="bannerData.desktopImage"
            :default-image="bannerData.defaultImage"
            :banner-link="bannerData.link"
          />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import ProductShowcase from '@/components/ProductShowcase.vue';
export default {
  components: {
    BannerComponent,
    ContentComponent,
    ProductShowcase,
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
      introductionData: {
        heading: 'THE GOOD, THE BEAUTIFUL, THE USEFUL',
        description:
          'This is the philosophy of La Droguerie, a collection of household products designed to elevate the everyday in a sustainable way.',
        ctaText: 'DISCOVER MORE',
        // ctaLink: '/your-cta-link'
      },
      storyData: {
        heading: 'METICULOUSLY HANDCRAFTED',
        // description: '',
        // ctaText: 'DISCOVER MORE',
        // ctaLink: '/your-cta-link'
      },
      aboutUsData: {
        heading: 'A PASSION FOR LOVE',
        description: 'Dolce dest decorum est Lorem Ipsum quick brown fox',
        ctaText: 'LEARN MORE',
        // ctaLink: '#'
      },
      products: [
        // Add your product details here
        {
          id: 1,
          name: 'Lorem Ipsum One',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          link: '/products/1',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          description: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          name: 'Lorem Ipsum Two',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          link: '/products/2',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Consectetur adipiscing elit.',
        },
        {
          id: 3,
          name: 'Lorem Ipsum Three',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-3.jpg',
          link: '/products/3',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Sed sit amet facilisis urna.',
        },
        {
          id: 4,
          name: 'Lorem Ipsum Four',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-2.jpg',
          link: '/products/4',
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
