<template>
  <header
      class="header"
      :class="{'_height': !isCurrentPage}"
  >
    <div class="container">
      <div class="header__wrapper">
        <TheLogo />
        <div class="header__action">
          <router-link v-if="!isCurrentPage" to="/favorites">
            <IconSearch class="header__icon"/>
            <span v-if="!isMobile">Поиск</span>
          </router-link>
          <router-link to="/favorites">
            <IconFavorites class="header__icon"/>
            <span v-if="!isMobile">Избранное</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import TheLogo from "@/components/TheLogo.vue";
import IconFavorites from "@/components/icons/IconFavorites.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import useMediaQueries from "@/use/MediaQueries";
import useRouteQueries from "@/use/RouteQueries";

const { isMobile } = useMediaQueries()
const { isCurrentPage } = useRouteQueries('home')


</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 147px;
  background: $black;

  @include respond-to(mobile) {
    height: 80px;
  }

  &._height {
    height: 80px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 38px;

    @include respond-to(mobile) {
      gap: 21px;
    }

    & a {
      display: flex;
      align-items: center;
      gap: 10px;
      color: $white;
      transition: color .2s ease;

      & span {
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
      }

      &:hover {
        color: $yellow;

        .header__icon {
          path {
            fill: yellow;
          }
        }
      }
    }
  }

}
</style>