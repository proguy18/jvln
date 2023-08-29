<template>
    <div class="p-4 text-center">
      <h1 class="mb-4 text-xl">{{ heading }}</h1>
      <p class="mb-4">{{ description }}</p>
      <a :href="ctaLink" class="px-4 py-2 text-white bg-blue-500 rounded">{{ ctaText }}</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading: String,
      description: String,
      ctaText: String,
      ctaLink: {
        type: String,
        default: '#'
      }
    }
  };
  </script>
  