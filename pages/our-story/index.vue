<template>
  <!-- Main Content -->
  <main class="container p-4 mx-auto">
    <!-- First Hero Section -->
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 lg:h-screen md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
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

    <!-- Our Story Section -->
    <section class="my-12 lg:h-screen">
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
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 lg:h-screen md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
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

    <!-- Our Story Section (Repeat) -->
    <section class="my-12 lg:h-screen">
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
import BannerComponent from "@/components/BannerComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
export default {
  components: {
    BannerComponent,
    ContentComponent,
  },
  data() {
    return {
      bannerData1: {
        image:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        mobileImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        tabletImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        laptopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        desktopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        defaultImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        // link: '/#'
      },
      bannerData2: {
        image:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        mobileImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        tabletImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        laptopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        desktopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        defaultImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        // link: '/#'
      },
      bannerData3: {
        image:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        mobileImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        tabletImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        laptopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        desktopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        defaultImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        // link: '/#'
      },
      bannerData4: {
        image:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        mobileImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        tabletImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_400,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        laptopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        desktopImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        defaultImage:
          "https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg",
        // link: '/#'
      },
      storyData1: {
        heading: "THE FIRST SPARK",
        description: [
          "Every great love story begins with a spark. Ours was no different. Amidst the ordinary moments of life, our paths crossed, and like the first light of a candle, our love story began, illuminating the world around us.",
          "JVLN, a blend of Joey and Evelin, stands as a testament to that initial spark. Each candle, with its unique fragrance and hue, symbolizes the different moments that have defined our journey together.",
          "From the soft, gentle glow of our early days to the blazing passion of our most memorable moments, these candles capture the essence of our love.",
          "As the candles illuminate, they release fragrances that transport us back to those special moments, a reminder of our beautiful beginnings and cherished memories.",
        ],
      },
      storyData2: {
        heading: "ADVENTURES TOGETHER",
        description: [
          "Life is an adventure, and with you by my side, every moment feels like an exciting chapter in an epic tale. From our spontaneous trips to quiet moments at home, our journey has been nothing short of magical.",
          "These candles, with their vibrant colors and exotic scents, echo our adventures. Each one narrates a story of a place we've visited, a memory we've forged, or a dream we've pursued together.",
          "The flickering flame mirrors the thrill of the unknown and the joy of discovering new horizons with you.",
          "Each time we light a candle, it's like opening a diary of our shared adventures, reliving the moments and anticipating more to come.",
        ],
      },
      storyData3: {
        heading: "GROWING TOGETHER",
        description: [
          "Like a candle that burns brighter over time, our love has only grown stronger with each passing day. From our early days of discovery to the present, our bond has deepened, and we've grown together in countless ways.",
          "The candles, with their layered fragrances and intricate designs, represent our growth. Each layer signifies a phase of our relationship, a challenge surmounted, or a milestone celebrated.",
          "The unwavering flame stands as a symbol of our commitment and the promises we've made to each other.",
          "Every time a candle is lit, it's a celebration of our journey, a tribute to the love that has matured and the adventures that await.",
        ],
      },
      storyData4: {
        heading: "DREAMS AND PROMISES",
        description: [
          "Every love story is built on dreams and promises. Dreams of a shared future and promises to always be there for each other. Our story is a testament to that. Since our first meeting, we've built a world of dreams, one at a time.",
          "These candles, with their soft glow and enchanting fragrances, mirror our dreams. Each one embodies a wish we've made, a vision we've shared, or a commitment we've honored.",
          "The gentle flicker of the flame resonates with the heartbeat of our dreams, alive with hope and promise.",
          "Each time we light a candle, it's a reminder of our shared dreams, the commitments we've honored, and the beautiful future we envision.",
        ],
      },
    };
  },
};
</script>
