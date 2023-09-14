<template>
  <TheHeader />
  <TheSearch />
  <DividerLine />
  <main class="home-page">
    <Gallery class="home-page__gallery"/>
    <Loading />
    <Button
        v-if="!isMobile"
        color="white"
        padding="p-16"
        class="home-page__button-scroll"
    >
      <IconArrowTop />
    </Button>
  </main>
</template>

<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheSearch from "@/components/TheSearch.vue";
import DividerLine from "@/components/DividerLine.vue";
import Gallery from "@/components/gallery/index.vue";
import Loading from "@/components/ui/Loading.vue";
import Button from "@/components/ui/Button.vue";
import useMediaQueries from "@/use/MediaQueries";
import IconArrowTop from "@/components/icons/IconArrowTop.vue";

const { isMobile } = useMediaQueries()
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