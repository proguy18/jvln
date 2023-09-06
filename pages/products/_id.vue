<template>
  <div class="container p-4 mx-auto">
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
            <h1 class="text-2xl font-bold text-primary font-mplus1p">
              {{ product.name }}
            </h1>
            <span class="block text-xl text-primary font-lato">{{
              product.type
            }}</span>
            <p class="text-onPrimary font-lato">{{ product.description }}</p>
          </div>
          <div>
            <div class="text-2xl font-semibold text-primary font-lato">
              {{ product.price }} €
            </div>
            <button
              class="w-full py-2 bg-blue-500 rounded-md text-primary hover:bg-blue-600 font-lato"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
    >
      <div class="col-span-full md:col-span-6 lg:col-span-8">
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
        class="text-left col-span-full md:col-span-6 lg:col-span-4 col-content px-section"
      >
        <ContentComponent
          :heading="product.storyData.heading"
          content-class="custom-class-to-center-content"
        />
      </div>
    </div>

    <section class="my-12">
      <div
        class="container flex flex-col items-center gap-4 px-4 pt-4 mx-auto mt-4 md:flex-row md:grid md:grid-cols-6 lg:grid-cols-12 md:px-8"
      >
        <div
          class="text-left md:col-span-3 lg:col-span-4 col-content px-section"
        >
          <ContentComponent
            :heading="product.substoryData.heading"
            :description="product.substoryData.description"
            :cta-text="product.substoryData.ctaText"
            :cta-link="product.substoryData.ctaLink"
          />
        </div>
        <!-- Here, you should use the first banner from the banners array or define another data property for this banner -->
        <div class="md:col-span-3 lg:col-span-8">
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
        id: '1',
        name: 'Product 1',
        type: 'Type 1',
        description: 'Description for Product 1',
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
        ],
        storyData: {
          heading: 'Story Heading for Product 1',
          // ... any other properties you need for storyData ...
        },
        substoryData: {
          heading: 'Substory Heading for Product 1',
          description: 'Substory Description for Product 1',
          ctaText: 'CTA Text for Product 1',
          ctaLink: 'CTA Link for Product 1',
        },
      },
      {
        id: '2',
        name: 'Product 2',
        type: 'Type 2',
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
          heading: 'Story Heading for Product 2',
          // ... any other properties you need for storyData ...
        },
        substoryData: {
          heading: 'Substory Heading for Product 2',
          description: 'Substory Description for Product 2',
          ctaText: 'CTA Text for Product 2',
          ctaLink: 'CTA Link for Product 2',
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
  },
};
</script>
