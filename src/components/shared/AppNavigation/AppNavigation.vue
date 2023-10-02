<script setup lang="ts">
import { sections } from "@/content/Navigation";
import { scrollToSection } from "@/state/AppState";
</script>

<template>
  <div
    v-for="section in sections"
    :key="section.id"
    class="item-container"
    :class="{ selected: section.isSelected }"
    @click="scrollToSection(section.goTo)"
  >
    <p class="item" :class="{ selected: section.isSelected }">
      {{ section.title }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.item-container {
  padding: 5px 10px;
  border-radius: 20px;
  gap: 45px;
  &:hover {
    cursor: pointer;
  }
  &.selected {
    background-color: $grey-light;
  }
  & .item {
    color: $grey;
    font-size: $font-size-p-mobile;
    &.selected {
      color: $black;
    }
    &:hover {
      @media (hover: hover) {
        color: $black;
      }
    }
  }
}
@media screen and (max-width: $breackpoint-medium) {
  .item-container {
    padding: 15px 0 15px 5px;
    width: 100%;
    border-bottom: 1px solid $grey-light;
    &:first-child {
      margin-top: 30px;
    }
  }
}
</style>
