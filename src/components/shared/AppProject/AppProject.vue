<script setup lang="ts">
import AppPill from "../AppPill/AppPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SimpleButton from "../AppButtons/SimpleButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { ProjectInfo } from "../../../content/Projects";
import { GradientType, isMobileDevice } from "../../../state/AppState";
import { computed, ref, watch } from "vue";

interface DesktopProjectProps {
  color: GradientType;
  information: ProjectInfo;
  id: number;
}
const props = defineProps<DesktopProjectProps>();

const projectImage = new URL(props.information.image, import.meta.url).href
const semboImage = new URL('/assets/sembo1.webp', import.meta.url).href

const isOverlayExpanded = ref<boolean>(false);
function toggleOverlayStatus(): void {
  if (!isMobileDevice.value) {
    return;
  }
  isOverlayExpanded.value = !isOverlayExpanded.value;
}

const pillColor = computed(() => (isMobileDevice.value ? "light" : "white"));

watch(isMobileDevice, () => {
  if (!isMobileDevice.value) {
    isOverlayExpanded.value = false;
  }
});
</script>

<template>
  <div class="project-container" :class="[props.color]">
    <div class="project-header">
      <h3 class="project-title">{{ information.title }}</h3>
      <div class="project-technologies" v-dragscroll>
        <AppPill
          v-for="technology in information.technologies"
          :key="technology.name"
          :name="technology.name"
          :should-hide-text="isMobileDevice"
          :icon-name="technology.iconName"
          :color="pillColor"
        />
      </div>
    </div>
    <div class="project-content">
      <div class="project-image" @click="toggleOverlayStatus">
        <div
          v-if="isMobileDevice"
          class="overlay"
          :class="{ 'full-overlay': isOverlayExpanded }"
        >
          <p class="project-description">
            {{ information.description }}
          </p>
        </div>
        <div v-if="isMobileDevice" class="icon-container">
          <SvgIcon name="arrow" color="white" />
        </div>
        <img alt="project image" class="image" :src="projectImage" />
        <div v-if="props.id === 1" class="sembo-logo-container">
          <img
            alt="Sembo logo"
            class="sembo-logo"
            :src="semboImage"
          />
        </div>
      </div>
      <div class="project-aside">
        <p v-if="!isMobileDevice" class="project-description">
          {{ information.description }}
        </p>
        <div class="project-buttons-container">
          <a
          aria-label="Open Github profile"
            target="_blank"
            :href="information.codeTo"
          >
            <DarkButton
              v-if="information.codeTo"
              text="Code"
              icon-name="github"
            />
          </a>
          <a
          aria-label="Open project"
            target="_blank"
            :href="information.runTo"
          >
            <SimpleButton
              text="Run"
              :color="props.color"
              icon-name="redirect"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.project-container {
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  &.blue {
    background-image: $blue-gradient-opacity-145;
  }
  &.pink {
    background-image: $pink-gradient-opacity-145;
  }
  &.orange {
    background-image: $orange-gradient-opacity-145;
  }
  @media screen and (max-width: $breackpoint-small) {
    padding: 0;
    &.blue,
    &.pink,
    &.orange {
      background-image: none;
    }
  }
  & .project-header {
    display: flex;
    gap: 3.25rem;
    align-items: center;
    margin-bottom: 30px;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    @media screen and (max-width: $breackpoint-small) {
      gap: 0px;
    }
    & .project-title {
      text-wrap: nowrap;
    }
    & .project-technologies {
      overflow: hidden;
      display: flex;
      position: relative;
      white-space: nowrap;
      align-items: flex-end;
      padding: 0 15px;
      height: 45px;
      width: 100%;
      gap: 10px;
      mask: $white-mask;
      -webkit-maskmask: $white-mask;
      -moz-user-maskmask: $white-mask;
      -ms-user-maskmask: $white-mask;
      cursor: grab;
    }
  }
  & .project-content {
    display: flex;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .project-image {
      position: relative;
      width: 60%;
      border-radius: 10px;
      overflow: hidden;
      color: $white;
      aspect-ratio: auto;
      @media screen and (max-width: $breackpoint-medium) {
        width: 100%;
        max-height: 450px;
        height: auto;
      }
      @media screen and (max-width: $breackpoint-small) {
        cursor: pointer;
      }

      &:hover {
        @media (hover: hover) {
          .overlay {
            opacity: 1;
          }
        }
      }

      & .image {
        width: 100%;
        height: 100%;
      }
      & .sembo-logo-container {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 20px 20px 0;
        border-radius: 10px;
        overflow: hidden;
        height: 20%;
        aspect-ratio: 1.3/1;
        & .sembo-logo {
          width: 100%;
          height: 100%;
        }
      }
      & .icon-container {
        margin: 5px 0;
        width: 100%;
        position: absolute;
        display: flex;
        bottom: 8px;
        left: 0;
        justify-content: center;
        transition: $transform-transition-05;
        --webkit-transition: $transform-transition-05;
        z-index: 1;
        @media screen and (max-width: $breackpoint-small) {
          bottom: 5px;
        }
      }
      & .overlay {
        position: absolute;
        background: $dark-gradient;
        top: 50%;
        left: 0;
        width: 100%;
        display: flex;
        height: 135%;
        transition: $transform-transition-05;
        --webkit-transition: $transform-transition-05;
        z-index: 1;

        &.full-overlay {
          transform: translateY(-60%);
          & .project-description {
            top: calc(62.5% - 10px);
            display: inline;
          }
          & ~ .icon-container {
            transform: rotate(540deg);
          }
        }
        & .project-description {
          transition: $basic-transition-05;
          --webkit-transition: $basic-transition-05;
          width: calc(100% - 50px);
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $white;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          @media screen and (max-width: $breackpoint-small) {
            top: 20%;
          }
        }
      }
    }
    & .project-aside {
      width: 40%;
      gap: 20px;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: $breackpoint-medium) {
        width: 100%;
        padding-left: 0;
      }
      & .project-buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
@keyframes scrollText {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
