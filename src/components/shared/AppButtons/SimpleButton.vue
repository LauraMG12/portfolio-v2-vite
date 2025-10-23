<script setup lang="ts">
import { computed } from "vue";
import { GradientType } from "../../../state/AppState";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconType } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconType;
  color: GradientType;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <button class="button" :class="[props.color]">
    <SvgIcon
      v-if="props.iconName"
      :name="props.iconName"
      :size="mobileIconSize"
    />
    <p class="button-text">
      {{ props.text }}
    </p>
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: transparent;
  position: relative;
  color: $black;
  border: 2px solid $black;
  padding: 10px 20px;
  width: fit-content;
  gap: 15px;
  background-color: $white;
  overflow: hidden;
  @media screen and (max-width: $breackpoint-medium) {
    padding: 5px 15px;
    gap: 10px;
  }
  &::before {
    content: "";
    transition: $basic-transition-025;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  &.blue::before {
    background-image: $blue-gradient-90-opacity-50;
  }
  &.pink::before {
    background-image: $pink-gradient-90-opacity-50;
  }
  &.orange::before {
    background-image: $orange-gradient-90-opacity-50;
  }
  &:hover {
    @media (hover: hover) {
      &::before {
        opacity: 1;
      }
    }
  }
  .button-text {
    font-size: $font-size-p-mobile;
    z-index: 1;
  }
  &:deep(.icon) {
    z-index: 1;
  }
}
</style>
