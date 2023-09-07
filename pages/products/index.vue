<template>
  <!-- Header -->
  <!-- Main Content -->
  <main class="container p-4 mx-auto">
    <div class="px-4 mx-auto mt-5">
      <ProductShowcase
        :products="products"
        title="Lorem Ipsum"
        description="A collection of our most popular items."
      />
    </div>
  </main>
</template>
<script>
// import BannerComponent from '@/components/BannerComponent.vue';
// import ContentComponent from '@/components/ContentComponent.vue';
export default {
  components: {
    // BannerComponent,
    // ContentComponent,
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
          id: 'baberini',
          name: 'Lorem Ipsum One',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          link: '/products/baberini',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-5.jpg',
          description: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 'baberino',
          name: 'Lorem Ipsum Two',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          link: '/products/baberino',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Consectetur adipiscing elit.',
        },
        {
          id: 'mangonada',
          name: 'Lorem Ipsum Three',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-3.jpg',
          link: '/products/mangonada',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
          description: 'Sed sit amet facilisis urna.',
        },
        {
          id: 'disney-couple',
          name: 'Lorem Ipsum Four',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301347/cld-sample-2.jpg',
          link: '/products/disney-couple',
          hoverImage:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/v1693301348/cld-sample-4.jpg',
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
