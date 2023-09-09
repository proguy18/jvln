<template>
  <div class="container p-4 mx-auto">
    <!-- Page Title -->
    <h1 class="mb-8 text-4xl font-bold text-center">Birthday Wishes</h1>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonial-card"
      >
        <!-- Image/Video -->
        <div class="relative w-full h-56 overflow-hidden bg-gray-200">
          <img
            v-if="testimonial.image"
            :src="testimonial.image"
            alt="Friend's Image"
            class="object-cover w-full h-full"
          />
          <video
            v-if="testimonial.video"
            controls
            class="object-cover w-full h-full"
          >
            <source :src="testimonial.video" type="video/mp4" />
          </video>
        </div>

        <!-- Message -->
        <div class="p-4">
          <p class="mb-4">{{ testimonial.message }}</p>
          <h3 class="font-bold">{{ testimonial.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Friend's Name",
          message: 'Happy Birthday message...',
          image:
            'https://res.cloudinary.com/dwgnjyezw/image/upload/e_improve,w_2700,h_1800,c_thumb,g_auto/v1694170419/IMG_8608_n3aghi.jpg',
          video: null,
        },
        // ... more testimonials
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styling specific to this page here */
</style>
