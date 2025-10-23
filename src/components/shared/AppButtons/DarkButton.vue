<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import AppLoadingDots from "../AppLoading/AppLoadingDots.vue";
import { IconType } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconType;
  href?: string;
  isLoading?: boolean;
  backgroundColor?: "blue-dark" | "orange";
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <a
    aria-label="Redirect"
    target="_blank"
    rel="noreferrer"
    role="button"
    class="button"
    :href="props.href"
    :class="[props.backgroundColor]"
  >
    <AppLoadingDots v-if="props.isLoading" type="white" />
    <SvgIcon
      v-if="props.iconName && !props.isLoading"
      :name="props.iconName"
      :size="mobileIconSize"
    />
    <p v-if="props.text && !props.isLoading" class="button-text">
      {{ props.text }}
    </p>
  </a>
</template>

<style scoped lang="scss">
.button {
  background-color: black;
  color: $white;
  padding: 10px 20px;
  width: fit-content;
  gap: 15px;
  transition: $basic-transition-025;
  --webkit-transition: $basic-transition-025;
  @media screen and (max-width: $breackpoint-medium) {
    padding: 5px 15px;
    gap: 10px;
  }

  &:hover {
    @media (hover: hover) {
      background-color: $grey;
    }
  }
  &.blue-dark {
    background-color: $blue-dark;
  }
  &.orange {
    background-color: $orange;
  }
}
</style>
