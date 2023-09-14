<template>
  <router-link to="/" class="logo">
    <img src="@/assets/images/logo-art-galery.svg">
  </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {

  & img {

    @include respond-to(mobile) {
      width: 84px;
      height: 32px;
    }
  }
}
</style>