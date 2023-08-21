<template>
  <div
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-x1 mr-1">
        <i class="bi bi-messenger"></i>
      </span>

      <h1 class="text-xl">JVLN</h1>
    </div>

    <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="link in Links">
        <a :href="link.link" class="text-xl hover:text-green-500">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    let Links = [
      { name: 'Home', link: '#' },
      { name: 'Products', link: '#' },
      { name: 'About Us', link: '#' },
      { name: 'Contact Us', link: '#' },
    ]
  },
}
</script>
