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
              <img
                :src="selectedImage"
                alt="Selected Product Image"
                class="object-cover w-full h-full"
              />
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
            <ProductGallery
              :images="product.images"
              @selectImage="updateSelectedImage"
            />
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
      <div class="container">
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). ""What is Lorem Ipsum? Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
        it? It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like). ""What is
        Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). ""What is Lorem Ipsum? Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
        it? It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like). "
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
  </div>
</template>

<script>
import ProductGallery from '~/components/ProductGallery.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';

export default {
  components: {
    BannerComponent,
    ContentComponent,
    ProductGallery,
  },
  asyncData({ params }) {
    const products = [
      {
        id: 'baberini',
        name: 'BABERINI',
        // type: 'Type 1',
        description:
          "A tribute to Baberini. Roses encapsulate love's essence. This candle melds various rose varieties, creating an authentic and timeless rose aroma that transports you to a blossoming garden.",
        price: '56',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample.jpg',
        ],
        banners: [
          {
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
          {
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
          {
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
        name: 'Product 2',
        // type: 'Type 2',
        description: 'Description for Product 2',
        price: '60',
        images: [
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
          'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-2.jpg',
        ],
        banners: [
          {
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
          {
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
      // ... Add more products in the same format as above if needed ...
    ];

    const product = products.find((p) => p.id === params.id);

    return {
      product,
      banners: product.banners,
      selectedImage:
        product && product.images
          ? product.images[0]
          : 'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-6.jpg',
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
      if (currentIndex > 0) {
        this.selectedImage = this.product.images[currentIndex - 1];
      }
    },
    nextImage() {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      if (currentIndex < this.product.images.length - 1) {
        this.selectedImage = this.product.images[currentIndex + 1];
      } else {
        this.selectedImage = this.product.images[0];
      }
    },
    setupObserver() {
      const options = {
        root: null,
        threshold: 1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(
            `Element: ${entry.target.className}, Intersection Ratio: ${entry.intersectionRatio}`,
          );

          if (entry.intersectionRatio === 1) {
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
