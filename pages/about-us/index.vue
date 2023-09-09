<template>
  <!-- Main Content -->
  <main class="container p-4 mx-auto">
    <!-- First Hero Section -->
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="col-span-full md:col-span-6 lg:col-span-8">
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
      <div
        class="text-left col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
      >
        <ContentComponent
          :heading="storyData1.heading"
          :description="storyData1.description"
          content-class="custom-class-to-center-content"
        />
      </div>
    </div>

    <!-- About Us Section -->
    <section class="my-12">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <!-- Content -->
        <div
          class="text-left md:col-span-3 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="storyData2.heading"
            :description="storyData2.description"
            :cta-text="storyData2.ctaText"
            :cta-link="storyData2.ctaLink"
          />
        </div>
        <!-- Banner/Image -->
        <div class="md:col-span-3 lg:col-span-8">
          <BannerComponent
            :mobile-image="bannerData2.mobileImage"
            :tablet-image="bannerData2.tabletImage"
            :laptop-image="bannerData2.laptopImage"
            :desktop-image="bannerData2.desktopImage"
            :default-image="bannerData2.defaultImage"
            :banner-link="bannerData2.link"
          />
        </div>
      </div>
    </section>

    <!-- Second Hero Section (Repeat of First) -->
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <!-- Banner/Image -->
      <div class="col-span-full md:col-span-6 lg:col-span-8">
        <BannerComponent
          :mobile-image="bannerData3.mobileImage"
          :tablet-image="bannerData3.tabletImage"
          :laptop-image="bannerData3.laptopImage"
          :desktop-image="bannerData3.desktopImage"
          :default-image="bannerData3.defaultImage"
          :banner-link="bannerData3.link"
        />
      </div>
      <!-- Content -->
      <div
        class="text-left col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
      >
        <ContentComponent
          :heading="storyData3.heading"
          :description="storyData3.description"
          :cta-text="storyData3.ctaText"
          :cta-link="storyData3.ctaLink"
        />
      </div>
    </div>

    <!-- About Us Section (Repeat) -->
    <section class="my-12">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <!-- Content -->
        <div
          class="text-left md:col-span-3 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="storyData4.heading"
            :description="storyData4.description"
            :cta-text="storyData4.ctaText"
            :cta-link="storyData4.ctaLink"
          />
        </div>
        <!-- Banner/Image -->
        <div class="md:col-span-3 lg:col-span-8">
          <BannerComponent
            :mobile-image="bannerData4.mobileImage"
            :tablet-image="bannerData4.tabletImage"
            :laptop-image="bannerData4.laptopImage"
            :desktop-image="bannerData4.desktopImage"
            :default-image="bannerData4.defaultImage"
            :banner-link="bannerData4.link"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
export default {
  components: {
    BannerComponent,
    ContentComponent,
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
      bannerData3: {
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
      bannerData4: {
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
      storyData1: {
        heading: 'THE FIRST SPARK',
        description: [
          'Every great love story begins with a spark. Ours was no different. Amidst the ordinary moments of life, our paths crossed, and like the first light of a candle, our love story began, illuminating the world around us.',
          'The candles on this site are reminiscent of that initial spark. Each one, with its unique fragrance and hue, symbolizes the different moments that have defined our journey together.',
          'From the soft, gentle glow of our early days to the blazing passion of our most memorable moments, these candles are a testament to a love that started with a single spark and grew into a roaring flame.',
          'And as each candle burns, it releases a fragrance that takes us back to those moments, reminding us of the beauty of beginnings and the magic of firsts.',
        ],
      },

      storyData2: {
        heading: 'ADVENTURES TOGETHER',
        description: [
          'Life is an adventure, and with you by my side, every moment feels like an exciting chapter in an epic tale. From our spontaneous trips to quiet moments at home, our journey has been nothing short of magical.',
          "These candles, with their vibrant colors and exotic scents, are reminiscent of our adventures. Each one tells a story of a place we've been, a memory we've created, or a dream we've chased together.",
          'The flickering flame is like the thrill of the unknown, the excitement of discovering something new with you. And as the wax melts, it reveals the essence of our shared experiences, the joy, the laughter, the challenges, and the triumphs.',
          "With every candle we light, we're transported back to those moments, reliving our adventures and dreaming of the many more to come.",
        ],
      },

      storyData3: {
        heading: 'GROWING TOGETHER',
        description: [
          "Like a candle that burns brighter over time, our love has only grown stronger with each passing day. From our early days of discovery to now, where our bond feels unbreakable, we've grown together, learning, evolving, and loving more deeply.",
          "The candles here, with their layered fragrances and intricate designs, symbolize our growth. Each layer represents a phase of our relationship, a challenge we've overcome, or a milestone we've achieved.",
          'The steady flame is a testament to our commitment, our promise to stand by each other, come what may. And as the wax melts, it reveals the depth of our bond, forged over time and solidified with shared experiences.',
          'With every candle we light, we celebrate our journey, honoring the love that has grown and the future that awaits.',
        ],
      },

      storyData4: {
        heading: 'DREAMS AND PROMISES',
        description: [
          "Every love story is built on dreams and promises. Dreams of a future together, and promises to stand by each other. Our story is no different. From the moment we met, we've dreamt together, building a world of our own, one dream at a time.",
          "These candles, with their soft glow and dreamy fragrances, are a reflection of our dreams. Each one is a wish we've made, a future we've envisioned, or a promise we've kept.",
          'The gentle flicker of the flame is like the heartbeat of our dreams, alive and full of hope. And as the wax melts, it reveals the foundation of our love, built on trust, understanding, and endless promises.',
          "With every candle we light, we're reminded of our dreams, the promises we've made, and the beautiful journey that lies ahead.",
        ],
      },
    };
  },
};
</script>
