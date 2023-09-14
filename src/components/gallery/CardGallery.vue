<template>
  <router-link to="/" class="card">

  </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
  width: 473.72px;
  height: 453.74px;
  border-radius: 8px;
  background: $gray200;

  @include respond-to(mobile) {
    width: 335.38px;
    height: 321.24px;
  }
}
</style>