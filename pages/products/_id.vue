<template>
  <div class="container p-4 mx-auto">
    <section class="h-screen scroll-snap-start">
      <div class="px-4 mx-auto mt-5">
        <div
          class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          <div class="relative space-y-4 md:w-1/2">
            <div
              class="relative w-full max-w-md overflow-hidden rounded-md shadow-lg h-[500px] mb-4"
            >
              <transition :name="slideDirection">
                <img
                  :key="selectedImage"
                  :src="selectedImage"
                  alt="Selected Product Image"
                  class="object-cover w-full h-full slide-image"
                />
              </transition>
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
          </div>
          <div class="flex flex-col justify-between space-y-4 md:w-1/2 h-128">
            <div>
              <h1 class="text-6xl text-primary font-mplus1p">
                {{ product.name }}
              </h1>
              <span class="block my-1 text-2xl text-primary font-lato">{{
                'Classic Candle'
              }}</span>
              <p class="my-4 text-onPrimary font-lato">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-screen scroll-snap-start">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <div class="start-at-left col-span-full md:col-span-6 lg:col-span-8">
          <BannerComponent
            :mobile-image="banners[0].mobileImage"
            :tablet-image="banners[0].tabletImage"
            :laptop-image="banners[0].laptopImage"
            :desktop-image="banners[0].desktopImage"
            :default-image="banners[0].defaultImage"
            :banners-link="banners[0].link"
          />
        </div>
        <div
          class="text-left start-at-bottom col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="product.storyData.heading"
            :description="product.storyData.description"
            content-class="custom-class-to-center-content"
          />
        </div>
      </div>
    </section>

    <section class="h-screen my-12">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <div
          class="text-left start-at-bottom md:col-span-3 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="product.substoryData.heading"
            :description="product.substoryData.description"
          />
        </div>
        <!-- Here, you should use the first banner from the banners array or define another data property for this banner -->
        <div class="start-at-right md:col-span-3 lg:col-span-8">
          <BannerComponent
            :mobile-image="banners[1].mobileImage"
            :tablet-image="banners[1].tabletImage"
            :laptop-image="banners[1].laptopImage"
            :desktop-image="banners[1].desktopImage"
            :default-image="banners[1].defaultImage"
            :banner-link="banners[1].link"
          />
        </div>
      </div>
    </section>
    <section class="h-screen scroll-snap-start">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <div class="start-at-left col-span-full md:col-span-6 lg:col-span-8">
          <BannerComponent
            :mobile-image="banners[2].mobileImage"
            :tablet-image="banners[2].tabletImage"
            :laptop-image="banners[2].laptopImage"
            :desktop-image="banners[2].desktopImage"
            :default-image="banners[2].defaultImage"
            :banners-link="banners[2].link"
          />
        </div>
        <div
          class="text-left start-at-bottom col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="product.finalStoryData.heading"
            :description="product.finalStoryData.description"
            content-class="custom-class-to-center-content"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';

export default {
  components: {
    BannerComponent,
    ContentComponent,
  },
  asyncData({ params }) {
    const products = [
      {
        id: 'baberini',
        name: 'BABERINI',
        // type: 'Type 1',
        description:
          "A tribute to Baberini. Roses encapsulate love's essence. This candle melds various rose varieties, creating an authentic and timeless rose aroma that transports you to a blossoming garden.",
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170422/IMG_8617_poprwz.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170427/IMG_8618_yvnv5q.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
        ],
        banners: [
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201634/IMG_8617-crop_rsf6dr.jpg',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201629/IMG_8618-crop_uonibx.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694201629/IMG_8618-crop_uonibx.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694201629/IMG_8618-crop_uonibx.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201629/IMG_8618-crop_uonibx.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201629/IMG_8618-crop_uonibx.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694201629/IMG_8618-crop_uonibx.jpg',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/logo_baberini_cl75qk.png',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/logo_baberini_cl75qk.png',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
            // link: '/#'
          },
        ],
        storyData: {
          heading: 'SYMPHONY OF NATURE',
          description:
            "Dive into the heart of a rose garden where various varieties intertwine. Each lends its unique note, crafting a symphony of nature's finest roses. Just like our love, every detail is handcrafted, every note carefully chosen.",
        },
        substoryData: {
          heading: 'HANDCRAFTED DEVOTION',
          description:
            "Every Baberini candle is handcrafted, just like the moments we've shared. From the delicate whispers of budding petals to the robust fragrances of full blooms, each scent is a testament to the time and care I've poured into our journey together.",
        },
        finalStoryData: {
          heading: 'A FLAME OF LOVE',
          description:
            "The harmonious blend of the Baberini candle isn't just about roses. It's about a love that burns bright and true. Each flicker of the flame is a reminder of my unwavering love for you, handcrafted and designed with you at its heart.",
        },
      },
      {
        id: 'baberino',
        name: 'BABERINO',
        // type: 'Type 2',
        description: "Our unisex signature. Saffron and cedar's elegant dance.",
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8615_if2apk.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170422/IMG_8616_awiagk.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199359/ezgif.com-optimize_s2kqu3.gif',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199023/00112-5_wf3dnn.png',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198038/logo_baberoni_nrruzr.png',
        ],
        banners: [
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199359/ezgif.com-optimize_s2kqu3.gif',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199023/00112-5_wf3dnn.png',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694199023/00112-5_wf3dnn.png',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694199023/00112-5_wf3dnn.png',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199023/00112-5_wf3dnn.png',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199023/00112-5_wf3dnn.png',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694199023/00112-5_wf3dnn.png',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198038/logo_baberoni_nrruzr.png',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694198038/logo_baberoni_nrruzr.png',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694198038/logo_baberoni_nrruzr.png',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198038/logo_baberoni_nrruzr.png',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198038/logo_baberoni_nrruzr.png',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198038/logo_baberoni_nrruzr.png',
            // link: '/#'
          },
        ],
        storyData: {
          heading: 'WHISPERS OF THE WILD',
          description:
            'In the heart of a secluded forest, saffron and cedarwood intertwine in a mysterious dance of scents. Each aroma, though subtle, carries a hint of a deeper story, reminiscent of the hidden tales of our love. This candle, handcrafted by me, begins our fragrant journey.',
        },

        substoryData: {
          heading: 'CRAFTED WITH CARE',
          description:
            "The Baberino candle isn't just an ordinary scent. It's a handcrafted testament to our shared moments, a delicate balance of love and devotion. With every whiff, remember the hands that molded it, especially for you.",
        },

        finalStoryData: {
          heading: "LOVE'S LUMINESCENCE",
          description:
            "Beyond the saffron and cedarwood, this candle holds a burning truth. It's not just a gift, but a radiant testament of my love for you. Every flicker is a heartbeat, every scent a cherished memory, all meticulously crafted with you at its very essence.",
        },
      },
      {
        id: 'disney-couple',
        name: 'DISNEYLAND COUPLE',
        // type: 'Type 1',
        description: 'Magic in every flicker. Relive our favorite Disney show.',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170418/IMG_8606_i8kx4t.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170419/IMG_8607_kgvswr.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170419/IMG_8608_n3aghi.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170420/IMG_8612_csqua3.jpg',
        ],
        banners: [
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198044/logo_disneylandcouple_egeeds.png',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694198044/logo_disneylandcouple_egeeds.png',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694198044/logo_disneylandcouple_egeeds.png',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198044/logo_disneylandcouple_egeeds.png',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198044/logo_disneylandcouple_egeeds.png',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198044/logo_disneylandcouple_egeeds.png',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8421_dxbdgt.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694200135/IMG-8421_dxbdgt.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694200135/IMG-8421_dxbdgt.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8421_dxbdgt.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8421_dxbdgt.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8421_dxbdgt.jpg',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8408_ho53tx.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694200135/IMG-8408_ho53tx.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694200135/IMG-8408_ho53tx.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8408_ho53tx.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8408_ho53tx.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694200135/IMG-8408_ho53tx.jpg',
            // link: '/#'
          },
        ],
        storyData: {
          heading: 'MAGIC IN THE AIR',
          description:
            'The enchanting aroma of blueberry pie wafts through the air, taking us back to that magical place where dreams come alive. Every handcrafted candle is a ticket to that unforgettable day at Disneyland, a day filled with laughter, joy, and shared memories.',
        },

        substoryData: {
          heading: 'A JOURNEY HANDCRAFTED',
          description:
            "This isn't just a candle; it's a handcrafted portal to our favorite show, a reminder of the magic we felt and the adventures we embarked upon. With every light, we're transported back, hand in hand, to the heart of Disneyland.",
        },

        finalStoryData: {
          heading: 'ILLUMINATED MEMORIES',
          description:
            'Beyond the scent of blueberry pie, this candle is a glowing testament of our shared journey. Every flicker is a moment from that day, every aroma a piece of our story, all meticulously crafted to celebrate us.',
        },
      },
      {
        id: 'mangonada',
        name: 'MANGONADA',
        // type: 'Type 1',
        description: 'Tropical delight in a flame. Sweet mango serenades.',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170420/IMG_8613_wrhkw9.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170421/IMG_8614_gvdsdr.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198982/00205-2757224066_d2poxt.png',
        ],
        banners: [
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8529_fejshc.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170416/IMG_8529_fejshc.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170416/IMG_8529_fejshc.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8529_fejshc.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8529_fejshc.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8529_fejshc.jpg',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8530_kh4gtj.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170416/IMG_8530_kh4gtj.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170416/IMG_8530_kh4gtj.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8530_kh4gtj.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8530_kh4gtj.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170416/IMG_8530_kh4gtj.jpg',
            // link: '/#'
          },
          {
            image:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170417/IMG_8556_lln21x.jpg',
            mobileImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170417/IMG_8556_lln21x.jpg',
            tabletImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_300,h_300,c_thumb,g_auto/v1694170417/IMG_8556_lln21x.jpg',
            laptopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170417/IMG_8556_lln21x.jpg',
            desktopImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170417/IMG_8556_lln21x.jpg',
            defaultImage:
              'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694170417/IMG_8556_lln21x.jpg',
            // link: '/#'
          },
        ],
        storyData: {
          heading: 'PRECISION IN EVERY GRAIN',
          description:
            "Every candle begins with meticulous attention to detail. The act of weighing the wax isn't just a step in the process; it's a testament to the precision and care I invest in every moment we share. Just as I ensure the perfect amount of wax, I strive to make every moment with you perfect.",
        },

        substoryData: {
          heading: 'COLORS OF AFFECTION',
          description:
            "The melted wax, infused with fragrance and taking on the hue of your favorite color, pink, is more than just a mixture. It's a blend of dedication, passion, and memories. Every drop signifies the lengths I'd go to, ensuring that even the smallest details resonate with your essence.",
        },

        finalStoryData: {
          heading: 'A MONUMENT OF MOMENTS',
          description:
            'The tower of five candles is not just a display of my craftsmanship but a symbol of the countless hours, the dedication, and the love poured into each creation. Every layer, every scent, every hue is a chapter of our story, handcrafted with you at its heart.',
        },
      },
      // ... Add more products in the same format as above if needed ...
    ];

    const product = products.find((p) => p.id === params.id);

    return {
      product,
      banners: product.banners,
      selectedImage:
        product && product.images
          ? product.images[0]
          : 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1694198045/logo_baberini_cl75qk.png',
      // Set the first image as the default selected image
    };
  },

  mounted() {
    this.setupObserver();
  },

  methods: {
    updateSelectedImage(image) {
      this.selectedImage = image;
    },
    prevImage() {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      this.slideDirection = 'slide-right';
      if (currentIndex > 0) {
        this.selectedImage = this.product.images[currentIndex - 1];
      } else {
        this.selectedImage =
          this.product.images[this.product.images.length - 1];
      }
    },
    nextImage() {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      this.slideDirection = 'slide-left';
      if (currentIndex < this.product.images.length - 1) {
        this.selectedImage = this.product.images[currentIndex + 1];
      } else {
        this.selectedImage = this.product.images[0];
      }
    },
    setupObserver() {
      const options = {
        root: null,
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(
            `Element: ${entry.target.className}, Intersection Ratio: ${entry.intersectionRatio}`,
          );

          if (entry.intersectionRatio > 0.5) {
            // Adjust this value as needed
            if (entry.target.classList.contains('start-at-left')) {
              entry.target.classList.add('slide-to-right');
            } else if (entry.target.classList.contains('start-at-right')) {
              entry.target.classList.add('slide-to-left');
            } else if (entry.target.classList.contains('start-at-bottom')) {
              entry.target.classList.add('slide-up');
            }
          }
        });
      }, options);

      document
        .querySelectorAll('.start-at-left, .start-at-right, .start-at-bottom')
        .forEach((el) => {
          observer.observe(el);
        });
    },
  },
};
</script>
