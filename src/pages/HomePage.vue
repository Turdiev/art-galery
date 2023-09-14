<template>
  <div class="home-page">
    <TheHeader />
    <TheSearch />
    <DividerLine />
    <Gallery class="home-page__gallery"/>
    <Loading />
    <ButtonScrollTop class="home-page__button-scroll"/>
  </div>
</template>

<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheSearch from "@/components/TheSearch.vue";
import DividerLine from "@/components/DividerLine.vue";
import Gallery from "@/components/gallery/index.vue";
import Loading from "@/components/ui/Loading.vue";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop.vue";
</script>

<style lang="scss" scoped>
.home-page {

  &__gallery {
    margin-top: 107px;

    @include respond-to(mobile) {
      margin-top: 45px;
    }
  }

  &__button-scroll {
    position: fixed;
    bottom: 10px;
    right: 113px;
  }
}
</style>