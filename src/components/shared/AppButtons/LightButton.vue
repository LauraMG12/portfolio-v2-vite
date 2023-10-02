<script setup lang="ts">
import { GradientType } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  gradientColor: GradientType;
}
const props = defineProps<AppButtonProps>();
</script>

<template>
  <div class="button-wrapper">
    <div
      class="background-gradient"
      :class="[`${props.gradientColor}-background`]"
    />
    <button class="button-container">
      <div class="button home-button">
        <p class="button-text">{{ props.text }}</p>
      </div>
      <div
        class="gradient gradient-border blue-gradient"
        :style="{ opacity: props.gradientColor === 'blue' ? 1 : 0 }"
      />
      <div
        class="gradient gradient-border pink-gradient"
        :style="{ opacity: props.gradientColor === 'pink' ? 1 : 0 }"
      />
      <div
        class="gradient gradient-border orange-gradient"
        :style="{ opacity: props.gradientColor === 'orange' ? 1 : 0 }"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.button-wrapper {
  position: relative;
  .background-gradient {
    width: 260px;
    height: 105px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16.25rem;
    filter: blur(17.5px);
    position: absolute;
    transition: background-color 0.25s ease-in;
    --webkit-transition: background-color 0.25s ease-in;
    @media screen and (max-width: $breackpoint-small) {
      width: 55vmin;
      min-width: 260px;
    }
    &.blue-background {
      background-color: $blue-dark-01;
    }
    &.pink-background {
      background-color: $pink-01;
    }
    &.orange-background {
      background: $orange-01;
    }
  }
  .button-container {
    position: relative;
    border-radius: 10px;
    @media screen and (max-width: $breackpoint-small) {
      width: 100%;
    }
    @media (hover: hover) {
      &:hover {
        .button.home-button {
          background-color: transparent;
          & .button-text {
            color: $white;
          }
        }
      }
    }
    .button.home-button {
      transition: all 0.2s ease-in;
      background-color: $white;
      color: $black;
      z-index: 2;
      width: 185px;
      height: 43px;
      @media screen and (max-width: $breackpoint-medium) {
        height: 38px;
      }

      & .button-text {
        color: $black;
        font-weight: 700;
      }
    }
    .gradient {
      position: absolute;
      top: -1px;
      left: -1px;
      height: 45px;
      width: 187px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      @media screen and (max-width: $breackpoint-medium) {
        height: 40px;
      }
      @media screen and (max-width: $breackpoint-small) {
        width: calc(100% + 2px);
      }
      &.gradient-border {
        transition: opacity 0.25s ease-in;
        --webkit-transition: opacity 0.25s ease-in;
      }
      &.blue-gradient {
        background-image: $blue-gradient-180;
      }
      &.pink-gradient {
        background-image: $pink-gradient-180;
      }
      &.orange-gradient {
        background-image: $orange-gradient-180;
      }
    }
  }
}
</style>
