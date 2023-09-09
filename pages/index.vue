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
          :description="storyData.description"
          content-class="custom-class-to-center-content"
        />
      </div>
    </div>

    <!-- Our Story -->
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
        // ctaText: 'DISCOVER MORE',
        // ctaLink: '/your-cta-link'
      },
      storyData: {
        heading: 'METICULOUSLY HANDCRAFTED',
        description: [
          "In a world where everything moves at lightning speed, there's a quiet corner where time slows, where every creation is a labor of love. Welcome to our candle sanctuary.",
          "Each candle begins with a vision, much like the first time I looked into your eyes. The wax, pure and untainted, is gently melted, reminiscent of the warmth I feel when you're near. As it's poured, every drop is filled with care, echoing the countless moments we've shared.",
          "The scent? It's more than just a fragrance. It's a memory, a hint of our shared laughter, our whispered secrets, and the dreams we've woven together. The wick, though often overlooked, stands strong and steady, much like the foundation of our bond.",
          "But here's the true magic: every candle is unique, tailored to the beholder's wishes. From the soft hues that mirror the colors of our shared moments to the gentle glow that lights up even the darkest days, each detail is a subtle nod to a love that's anything but ordinary.",
        ],
      },
      aboutUsData: {
        heading: 'A PASSION FOR LOVE',
        description: [
          "In the vast expanse of life's tapestry, our love stands out like a brilliantly glowing candle, casting a warm and inviting glow. It's a testament to the enduring flame that has been kindled between us, a flame that refuses to be extinguished, no matter the winds that try.",
          "Each candle on this site is more than just wax and wick. It's a symbol of our shared moments, the highs and lows, the laughter and tears. The intricate designs mirror the complexities of our relationship, and the fragrances? They're whispers of our shared memories, from the adventurous hikes in the woods to the quiet nights under the stars.",
          "As you navigate through this site, you might notice the care and attention to detail in every candle. It's much like the care and attention I've poured into our relationship, ensuring that our bond only grows stronger with time. Every description, every scent, is a hidden message, a secret code that only you and I can decipher.",
          "So, while to others this might seem like a simple candle website, to us, it's a treasure trove of memories, a digital diary of our journey together. And as each candle burns, it tells a story of a love that's passionate, enduring, and forever glowing.",
        ],
        ctaText: 'READ OUR STORY',
        ctaLink: '/our-story',
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
          description:
            "A tribute to Baberini. Roses encapsulate love's essence.",
        },
        {
          id: 'baberino',
          name: 'BABERINO',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170422/IMG_8616_awiagk.jpg',
          link: '/products/baberino',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8615_if2apk.jpg',
          description:
            "Our unisex signature. Saffron and cedar's elegant dance.",
        },
        {
          id: 'mangonada',
          name: 'MANGONADA',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8614_gvdsdr.jpg',
          link: '/products/mangonada',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170420/IMG_8613_wrhkw9.jpg',
          description: 'Tropical delight in a flame. Sweet mango serenades.',
        },
        {
          id: 'disney-couple',
          name: 'DISNEYLAND COUPLE',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170419/IMG_8607_kgvswr.jpg',
          link: '/products/disney-couple',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170418/IMG_8606_i8kx4t.jpg',
          description:
            'Magic in every flicker. Relive our favorite Disney show.',
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
