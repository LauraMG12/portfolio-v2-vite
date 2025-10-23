<script setup lang="ts">
import { computed, watch } from "vue";

import { sections } from "../content/Navigation";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import MobileNavigationIcon from "./shared/SvgIcon/MobileNavigationIcon.vue";

import { isSmallDevice, scrollToSection } from "../state/AppState";

import {
  isMobileNavigationOpened,
  toggleNavigationState,
} from "@/state/AppState";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);

watch(isSmallDevice, () => {
  if (!isSmallDevice.value) {
    isMobileNavigationOpened.value = false;
  }
});
</script>

<template>
  <nav class="navigation">
    <div @click="scrollToSection('homePage')" class="header">
      <SvgIcon name="logo" :size="mobileIconSize" />
    </div>
    <MobileNavigationIcon
      v-if="isSmallDevice"
      @click="toggleNavigationState()"
      class="header"
    />
    <ul v-else class="navigation-items">
      <li
        v-for="section in sections"
        :key="section.id"
        class="item-container"
        :class="{ selected: section.isSelected }"
        @click="scrollToSection(section.goTo)"
      >
        <a class="item" :class="{ selected: section.isSelected }">
          {{ section.title }}
        </a>
      </li>
    </ul>
    <Transition name="slide-down">
      <ul
        v-if="isMobileNavigationOpened && isSmallDevice"
        class="mobile-navigation"
      >
        <li
          v-for="section in sections"
          :key="section.id"
          class="item-container"
          @click="scrollToSection(section.goTo)"
        >
          <a class="item" :class="{ selected: section.isSelected }">
            {{ section.title }}
          </a>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  margin: 0 50px;
  height: $navigation-height;
  position: relative;
  display: flex;
  z-index: $navigation-index;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: $breackpoint-small) {
    margin: 0 25px 0 15px;
  }
  .header {
    z-index: 12;
    cursor: pointer;
  }
  .navigation-items {
    width: 600px;
    display: flex;
    justify-content: space-between;
    .item-container {
      padding: 5px 10px;
      border-radius: 20px;
      list-style-type: none;
      gap: 45px;
      &:hover {
        cursor: pointer;
      }
      .item {
        color: $grey;
        font-size: $font-size-p-mobile;
        &:hover {
          @media (hover: hover) {
            color: $black;
          }
        }
      }
    }
  }
}
.mobile-navigation {
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: $white;

  padding: $navigation-height 50px 0 50px;
  @media screen and (max-width: $breackpoint-small) {
    padding: $navigation-height 20px 0 20px;
  }

  .item-container {
    padding: 15px 0 15px 5px;
    width: 100%;
    border-bottom: 1px solid $grey-light;
    list-style-type: none;

    &:first-child {
      margin-top: 30px;
    }
    .item {
      color: $grey;
      font-size: $font-size-p-mobile;
      &:hover {
        cursor: pointer;
        @media (hover: hover) {
          color: $black;
        }
      }
    }
  }
}
.slide-down {
  &-enter-from,
  &-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  &-enter-to,
  &-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.3s linear;
    --webkit-transition: all 0.3s linear;
  }
}
</style>
