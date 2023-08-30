<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <Navbar />

    <!-- Page Content -->
    <Nuxt />

    <!-- Footer -->
    <footer>
      <!-- Newsletter Signup -->
      <section class="p-6 my-12 bg-gray-200 rounded-md">
        <h2 class="mb-4 text-2xl font-bold">Lorem Ipsum Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <section class="my-12">
        <h2 class="mb-4 text-2xl font-bold font-mplus1p text-primary">
          FOLLOW US
        </h2>
        <p text-primary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          facilisis urna.
        </p>
      </section>

      <!-- Any other footer content can go here -->
    </footer>
  </div>
</template>
