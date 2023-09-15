<template>
  <TheHeader id="top"/>
  <TheSearch
    @click="onSearchImages($event)"
  />
  <DividerLine />
  <main class="home-page">
    <div class="container">
      <Gallery
          class="home-page__gallery"
          :content="mainContent"
      />
      <Loading v-if="imageStore.isLoading"/>
    </div>
    <Button
        v-if="!isMobile"
        color="white"
        padding="p-16"
        class="home-page__button-scroll"
        v-scroll-to="'#top'"
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
import {useImageStore} from "@/store";
import { ref, watchEffect, onMounted, onUnmounted} from "vue";

const { isMobile } = useMediaQueries()
const imageStore = useImageStore()

imageStore.getRandomImages()

const mainContent = ref()
const searchValue = ref('')
const pageNumber = ref(1)

watchEffect(() => {
  if (imageStore.images.length) {
    mainContent.value = imageStore.images
  }
})

const onSearchImages = (event) => {
  searchValue.value = event.value
  imageStore.searchImages(event.value)
}

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 200) {
    pageNumber.value++
    imageStore.searchImageWhenScrolling(searchValue.value, pageNumber.value)
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Удалить обработчик прокрутки при демонтаже
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


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