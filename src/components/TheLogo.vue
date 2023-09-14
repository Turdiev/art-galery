<template>
  <router-link
      to="/"
      class="logo"
  >
    <img src="@/assets/images/logo-art-galery.svg" :class="{'_resize': !isHomePage}">
  </router-link>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

const isHomePage = computed(() => route.name === 'home')
</script>

<style lang="scss" scoped>
.logo {

  & img {

    @include respond-to(mobile) {
      width: 84px;
      height: 32px;
    }

    &._resize {
      width: 112px;
      height: 43px;
    }

  }
}
</style>