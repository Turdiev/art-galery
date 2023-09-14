<template>
  <div class="button-scroll-top">
    <IconArrowTop />
  </div>
</template>

<script setup>

import IconArrowTop from "@/components/icons/IconArrowTop.vue";
</script>

<style lang="scss" scoped>
.button-scroll-top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 49px;
  border-radius: 8px;
  border: 1px solid $gray200;
  background: $white;
  cursor: pointer;
}
</style>