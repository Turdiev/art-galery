<template>
  <router-link
      :to="path"
      :class="`_${color} _${padding}`"
      class="button"
  >
    <slot />
  </router-link>
</template>

<script setup>

defineProps({
  color: {
    type: String,
    default: 'white'
  },
  path: {
    type: String,
    default: ''
  },
  padding: {
    type: String,
    default: '0'
  }
})

</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: max-content;
  height: 49px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000040;


  @include respond-to(mobile) {
    width: 40px;
    height: 40px;
  }

  &._white {
    background: $white;
    border: 1px solid $gray200;
    color: $black;
  }

  &._yellow {
    background: $yellow;
    border: 1px solid $yellow;
    color: $black;
  }

  &._p-16 {
    padding: 16px;

    @include respond-to(mobile) {
      padding: 6px;
    }
  }

  &._p-12-23 {
    padding: 12px 23px;

    @include respond-to(mobile) {
      padding: 6px;
    }
  }
}
</style>