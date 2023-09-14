<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__wrapper">
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
      </div>
    </div>
  </div>
</template>

<script setup>

import CardGallery from "@/components/gallery/CardGallery.vue";
</script>

<style lang="scss" scoped>
.gallery {

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 23px 0;
    flex-wrap: wrap;

    @include respond-to(mobile) {
      gap: 16px 0;
    }
  }
}
</style>