<template>
  <TheHeader />
  <main class="photo-page">
    <div v-if="!isMobile" class="photo-page__bg"></div>
    <div class="container">
      <div class="photo-page__wrapper">
        <div class="photo-page__person person">
          <div class="person__avatar">
          </div>
          <div class="person__wrapper">
            <span class="person__name">Vincent van Gogh</span>
            <span class="person__username">@vincentvangogh</span>
          </div>
        </div>
        <div class="photo-page__action">
          <Button
              color="white"
              padding="p-16"
              class="photo-page__favorites"
          >
            <IconFavorites />
          </Button>
          <Button
              color="yellow"
              padding="p-12-23"
              class="photo-page__favorites"
          >
            <IconDownload />
            <span v-if="!isMobile">Downloand</span>
          </Button>
        </div>
      </div>
      <div class="photo-page__display">
        <img src="" alt="">
      </div>
    </div>
  </main>
</template>

<script setup>

import TheHeader from "@/components/TheHeader.vue";
import Button from "@/components/ui/Button.vue";
import IconFavorites from "@/components/icons/IconFavorites.vue";
import IconDownload from "@/components/icons/IconDownload.vue";
import useMediaQueries from "@/use/MediaQueries";

const { isMobile } = useMediaQueries()

console.log('is', isMobile.value)
</script>

<style lang="scss" scoped>
.photo-page {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;

  &__bg {
    position: absolute;
    width: 100%;
    height: 774px;
    background-image: url('@/assets/images/backgraund-photo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    z-index: -1;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 43px 0 40px;

    @include respond-to(mobile) {
      padding: 40px 0 32px;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 20px;

    @include respond-to(mobile) {
      gap: 16px;
    }
  }

  &__display {
    width: 100%;
    height: 774px;
    background: #000;
    border-radius: 8px;
  }
}

.person {
  display: flex;
  align-items: center;
  gap: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__avatar {
    width: 55px;
    height: 55px;
    background: #fff;

    @include respond-to(mobile) {
      width: 48px;
      height: 48px;
    }
  }

  &__name {
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    color: $white;

    @include respond-to(mobile) {
      font-size: 18px;
      color: $black;
      line-height: 21px;
    }
  }

  &__username {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: $white;

    @include respond-to(mobile) {
      font-size: 14px;
      color: $gray300;
      line-height: 16px;
    }
  }
}
</style>