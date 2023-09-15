<template>
  <router-link :to="`/photo/${image.id}`" class="card">
    <img :src="image.urls.small" alt="">
  </router-link>
</template>

<script setup>
defineProps({
  image: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.card {
  width: 473.72px;
  height: 453.74px;

  @include respond-to(mobile) {
    width: 335.38px;
    height: 321.24px;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
}
</style>