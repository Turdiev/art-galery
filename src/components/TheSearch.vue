<template>
  <div class="search">
    <picture>
      <source srcset="@/assets/images/background-search-mob.jpg" media="(max-width: 768px)" />
      <img src="@/assets/images/background-search.jpg" alt="" class="search__img"/>
    </picture>
    <div class="search__input">
      <input v-model="searchValue" placeholder="Поиск" class="input"/>
      <IconSearch class="search__icon"/>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";

const searchValue = ref()

</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 253px;

  @include respond-to(mobile) {
    height: 230px;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .5);
    z-index: 0;

    @include respond-to(mobile) {
      background-color:rgba(0, 0, 0, 0);
    }
  }

  & picture {
    width: 100%;
    height: 100%;
  }

  &__img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  &__input {
    position: absolute;
    width: 866px;
    height: 70px;
    background-color: $white;
    z-index: 1;

    @include respond-to(tablet) {
      width: 95%;
      margin: 0 $x-offset-22;
    }

    & input {
      width: 100%;
      height: 100%;
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
      padding: 27px 70px 27px 39px;
    }
  }

  &__icon {
    position: absolute;
    top: 24px;
    right: 34px;
  }
}
</style>