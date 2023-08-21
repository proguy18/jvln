<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="h-screen bg-green-400">
      <Navbar />
    </div>


    <!-- Main Content -->
    <main class="container p-4 mx-auto">
      <!-- You can start building your main content here. -->
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
