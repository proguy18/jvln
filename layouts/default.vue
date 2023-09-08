<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <Navbar />

    <!-- Page Content -->
    <Nuxt />

    <!-- Footer -->
    <footer class="bg-background">
      <!-- Unified footer color -->
      <!-- Newsletter Signup -->
      <section class="p-6 my-12">
        <h2 class="mb-4 text-2xl font-bold text-primary">
          Join Our Newsletter
        </h2>
        <p class="text-primary">
          Stay updated with our latest news and stories.
        </p>
        <form class="mt-4">
          <input
            type="email"
            placeholder="Your email address"
            class="p-2 mr-2 rounded-md"
          />
          <button type="submit" class="p-2 text-white bg-blue-500 rounded-md">
            Subscribe
          </button>
        </form>
      </section>

      <!-- Contact Information -->
      <section class="p-6">
        <!-- <section> -->
        <h2 class="mb-4 text-2xl font-bold font-mplus1p text-primary">
          FOLLOW US
        </h2>
        <div class="flex space-x-4">
          <!-- FontAwesome icons for social media -->
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800"
          >
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-700"
          >
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-red-600 hover:text-red-800"
          >
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <!-- Add more icons as needed -->
        </div>
        <p class="mt-4 text-primary">
          Connect with us on our social media platforms for the latest updates.
        </p>
      </section>

      <!-- If there's another container below, you can adjust or remove it here. If you want to keep it, ensure it has the same background color as the rest of the footer. -->
    </footer>
  </div>
</template>
