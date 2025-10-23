<script setup lang="ts">
import { IconType } from "../SvgIcon/SvgIconHelper";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { isSmallDevice } from "@/state/AppState";
import { computed } from "vue";

interface AppPillProps {
  name?: string;
  iconName?: IconType;
  shouldHideText?: boolean;
  color: "dark" | "light" | "white";
}
const props = defineProps<AppPillProps>();
const iconSize = computed(() =>
  isSmallDevice.value ? { width: 18, height: 18 } : { width: 20, height: 20 }
);
const translatePiniaIcon = { x: 2 };
</script>

<template>
  <div class="pill-container" :class="[props.color]">
    <SvgIcon
      v-if="props.iconName"
      :name="props.iconName"
      :size="iconSize"
      :translate="props.iconName === 'pinia' ? translatePiniaIcon : undefined"
    />
    <p v-if="props.name && !props.shouldHideText" class="pill-text">
      {{ props.name }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.pill-container {
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: fit-content;
  @media screen and (max-width: $breackpoint-medium) {
    padding: 5px 15px;
  }
  &.dark {
    background-color: $grey-dark;
    color: $white;
  }
  &.light {
    background-color: $grey-light;
    color: $black;
  }
  &.white {
    background-color: $white;
    color: $grey-dark;
  }
  .pill-text {
    font-size: $font-size-p-mobile;
    white-space: nowrap;
  }
}
</style>
