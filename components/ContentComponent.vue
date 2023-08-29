<template>
    <div class="p-4 text-center">
        <h1 class="mb-4 text-xl text-primary">{{ heading }}</h1>
        <p class="mb-4 text-primary">{{ description }}</p>
        <a :href="ctaLink" class="px-4 py-2 bg-transparent border rounded border-primary text-primary hover:bg-onPrimary">
            {{ ctaText }}
        </a>

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
  