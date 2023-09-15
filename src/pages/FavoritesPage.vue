<template>
  <TheHeader />
  <DividerLine />
  <main class="favorites-page">
    <div class="container">
      <h2 class="favorites-page__title">Избранное</h2>

      <Gallery
        :content="imageStore.favoritesPictures"
      />
    </div>

  </main>
</template>

<script setup>

import TheHeader from "@/components/TheHeader.vue";
import DividerLine from "@/components/DividerLine.vue";
import Gallery from "@/components/gallery/index.vue";
import {useImageStore} from "@/store";

const imageStore = useImageStore()

</script>

<style lang="scss" scoped>
.favorites-page {

  &__title {
    font-size: 72px;
    font-weight: 700;
    line-height: 84px;
    text-align: center;
    margin: 94px 0 100px;

    @include respond-to(mobile) {
      font-size: 36px;
      line-height: 42px;
      margin: 40px 0 56px;
    }
  }
}
</style>