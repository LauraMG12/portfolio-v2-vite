<script setup lang="ts">
import type { GroupedExperiences } from "@/content/Experience";
import { isMobileDevice } from "@/state/AppState";

interface AppExperienceProps {
  info: GroupedExperiences;
}

const props = defineProps<AppExperienceProps>();

const altText = `${props.info.info.companyName} logo`;

function getImgPath(imageName: string) {
  return new URL(imageName, import.meta.url).href;
}
</script>

<template>
  <div
    class="experience-wrapper"
    :class="{
      left: props.info.color === 'pink' && !isMobileDevice,
      right: props.info.color != 'pink' || isMobileDevice,
    }"
  >
    <div class="bullet" :class="[props.info.color]"></div>
    <div class="logos-wrapper">
      <div
        class="logo-container"
        v-for="logo in props.info.info.companyLogo"
        :key="logo"
      >
        <img
          :src="getImgPath(logo)"
          class="logo"
          :alt="altText"
          loading="lazy"
        />
      </div>
    </div>
    <h3 class="company-name">
      {{ props.info.info.companyName }}
    </h3>
    <p class="period">
      {{ props.info.info.period }}
    </p>
    <p class="description">
      {{ props.info.info.description }}
    </p>
    <div class="details">
      <p
        v-for="(detail, index) in props.info.info.details"
        :key="index"
        class="detail"
      >
        {{ detail }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.experience-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
  @media screen and (max-width: $breackpoint-small) {
    width: fit-content;
    margin-left: 20px;
  }
  &.right {
    transform: translateX(100%);
    border-left: 3px solid $grey-light;
    padding: 20px 0 20px 50px;
    @media screen and (max-width: $breackpoint-small) {
      transform: none;
    }
    & .bullet {
      left: 0;
      transform: translateX(-10px);
    }
  }
  &.left {
    border-right: 3px solid $grey-light;
    transform: translateX(3px);
    padding: 20px 50px 20px 0;
    align-items: end;
    text-align: end;
    & .bullet {
      right: 0;
      transform: translateX(10px);
    }
  }
  & .bullet {
    position: absolute;
    top: 35px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    transform: rotate(45deg);
    &.blue {
      background-image: $blue-gradient-90;
    }
    &.pink {
      background-image: $pink-gradient-90;
    }
    &.orange {
      background-image: $orange-gradient-90;
    }
  }
  & .logos-wrapper {
    display: flex;
    gap: 15px;
    & .logo-container {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: #f8f8f8;
      border: 1px solid $grey-light;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;

      & .logo {
        height: 100%;
      }
    }
  }

  & .period {
    font-style: italic;
    color: $grey-dark;
  }
  & .details {
    & .detail {
      color: rgb(89, 89, 89);
      font-size: $font-size-small;
      @media screen and (max-width: $breackpoint-small) {
        font-size: $font-size-smallest;
      }
    }
  }
}
</style>
