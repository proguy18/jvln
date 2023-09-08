<template>
  <!-- Main Content -->
  <main class="container p-4 mx-auto">
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="md:col-span-3 lg:col-span-8">
        <BannerComponent
          :mobile-image="bannerData1.mobileImage"
          :tablet-image="bannerData1.tabletImage"
          :laptop-image="bannerData1.laptopImage"
          :desktop-image="bannerData1.desktopImage"
          :default-image="bannerData1.defaultImage"
          :banner-link="bannerData1.link"
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
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="col-span-full md:col-span-6 lg:col-span-8">
        <BannerComponent
          :mobile-image="bannerData2.mobileImage"
          :tablet-image="bannerData2.tabletImage"
          :laptop-image="bannerData2.laptopImage"
          :desktop-image="bannerData2.desktopImage"
          :default-image="bannerData2.defaultImage"
          :banner-link="bannerData2.link"
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
            :mobile-image="bannerData3.mobileImage"
            :tablet-image="bannerData3.tabletImage"
            :laptop-image="bannerData3.laptopImage"
            :desktop-image="bannerData3.desktopImage"
            :default-image="bannerData3.defaultImage"
            :banner-link="bannerData3.link"
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
      bannerData1: {
        image:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        mobileImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        tabletImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        laptopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        desktopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        defaultImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
        // link: '/#'
      },
      bannerData2: {
        image:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        mobileImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        tabletImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        laptopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        desktopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        defaultImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170417/IMG_8532_nqnazw.jpg',
        // link: '/#'
      },
      bannerData3: {
        image:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        mobileImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        tabletImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        laptopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        desktopImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        defaultImage:
          'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170418/IMG_8604_cv03lx.jpg',
        // link: '/#'
      },
      introductionData: {
        heading: 'OUR LOVE STORY',
        description:
          "A journey of love, laughter, and countless memories. Celebrating the special moments we've shared.",
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
        description:
          'Like a candle, our love lights up the darkest moments, bringing warmth and joy to every day.',
        ctaText: 'READ OUR STORY',
        ctaLink: '/aboutus',
      },
      products: [
        // Add your product details here
        {
          id: 'baberini',
          name: 'BABERINI',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170427/IMG_8618_yvnv5q.jpg',
          link: '/products/baberini',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170422/IMG_8617_poprwz.jpg',
          description: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 'baberino',
          name: 'BABERINO',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170422/IMG_8616_awiagk.jpg',
          link: '/products/baberino',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8615_if2apk.jpg',
          description: 'Consectetur adipiscing elit.',
        },
        {
          id: 'mangonada',
          name: 'MANGONADA',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8614_gvdsdr.jpg',
          link: '/products/mangonada',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170420/IMG_8613_wrhkw9.jpg',
          description: 'Sed sit amet facilisis urna.',
        },
        {
          id: 'disney-couple',
          name: 'DISNEYLAND COUPLE',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170419/IMG_8607_kgvswr.jpg',
          link: '/products/disney-couple',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170418/IMG_8606_i8kx4t.jpg',
          description: 'Praesent ac gravida libero.',
        },
        // ... more products
      ],
      testimonials: [
        // Add your testimonial details here
        // {
        //     id: "baberini",
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
