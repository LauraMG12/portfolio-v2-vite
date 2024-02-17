<script setup lang="ts">
import { SubProjectInfo } from "../../../content/Projects";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { isMobileDevice, isTouchDevice } from "@/state/AppState";

interface SubProjectCardProps {
  information: SubProjectInfo;
}
const props = defineProps<SubProjectCardProps>();

const projectImage = new URL(props.information.image, import.meta.url).href;
</script>

<template>
  <a
    aria-label="Open project"
    class="card"
    :class="{ colored: isTouchDevice() }"
    target="_blank"
    rel="noreferrer"
    :href="information.runTo"
  >
    <img alt="project image" class="image" :src="projectImage" />
    <div class="card-content">
      <div class="card-header">
        <header class="title-wrapper">
          <h3 class="project-title">{{ information.title }}</h3>
          <p
            class="project-description"
            v-if="props.information.inProgress && !isMobileDevice"
          >
            [In progress]
          </p>
        </header>
        <p class="project-description">
          {{ information.description }}
        </p>
      </div>
      <div class="githubIcon">
        <SvgIcon name="github" :size="{ width: 30, height: 30 }" />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.card {
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid $grey-dark;
  transition: $basic-transition-025;
  background-color: $white;
  display: flex;
  flex-direction: column;
  position: relative;
  .image {
    aspect-ratio: 4/3;
    width: 100%;
  }

  &.colored {
    cursor: pointer;
    transform: translate(-3px, -3px);
    & .image,
    & .card-content {
      mix-blend-mode: normal;
    }
    & .githubIcon {
      color: $blue-dark;
    }
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0px 0px $grey-dark;
      & .image,
      & .card-content {
        mix-blend-mode: normal;
      }
      & .githubIcon {
        color: $blue-dark;
      }
    }
    &:active {
      transform: translate(0, 0);
      box-shadow: 0px 0px 0px 0px $grey-dark;
    }
  }
  & .image {
    width: 100%;
    mix-blend-mode: luminosity;
    object-fit: cover;
  }
  & .card-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    .card-header {
      background-color: $white;
      border-radius: 10px 10px 0 0;
      padding: 20px 20px 5px 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      transform: translatey(-20px);
      @media screen and (max-width: $breackpoint-small) {
        gap: 10px;
        padding: 10px 10px 10px 10px;
        transform: none;
      }
      .title-wrapper {
        display: flex;
        justify-content: space-between;
      }
    }

    & .project-title {
      font-size: $font-size-p-desktop;
      color: $grey-dark;
      font-weight: $font-weight-bold;
      @media screen and (max-width: $breackpoint-medium) {
        font-size: $font-size-button;
      }
    }
    & .project-description {
      font-size: $font-size-small;
      color: $grey-dark;
      font-weight: $font-weight-normal;
      @media screen and (max-width: $breackpoint-medium) {
        font-size: $font-size-smallest;
      }
    }
  }
  & .githubIcon {
    align-self: end;
    transform: translate(-10px, -10px);
    background-color: $grey-light;
    padding: 5px;
    border-radius: 20px;
    & :deep(svg.icon.github) {
      transform: translate(1px, 1px);
    }
    @media screen and (max-width: $breackpoint-small) {
      position: absolute;
      transform: none;
      margin: 5px 5px 0 0;
      top: 0;
      right: 0;
    }
  }
}
</style>
