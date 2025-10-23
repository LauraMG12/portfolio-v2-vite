<script setup lang="ts">
import { isSmallDevice } from "@/state/AppState";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import type { GroupedTechnologies } from "@/content/Technologies";
import { computed, ref, onMounted } from "vue";

interface TechnologyGroupProps {
  information: GroupedTechnologies;
}
const props = defineProps<TechnologyGroupProps>();
const techGroup = ref<HTMLDivElement | null>(null);
const groupHeight = ref<string>("");
onMounted(() => {
  const resizeObserver = new ResizeObserver(setGroupHeight);
  if (!techGroup.value) {
    return;
  }
  resizeObserver.observe(techGroup.value);
  setGroupHeight();
});
function setGroupHeight() {
  groupHeight.value = `${techGroup.value?.clientHeight}px`;
}

const iconsSize = computed(() =>
  isSmallDevice.value ? { width: 40, height: 40 } : { width: 50, height: 50 }
);

const isGroupOpened = ref<boolean>(true);
function toggleGroupInfoVisibility(): void {
  isGroupOpened.value = !isGroupOpened.value;
}
const translatePiniaIcon = { x: 10, y: 0 };
const translateIcon = { x: 2, y: 0 };
</script>

<template>
  <div class="technologies-group">
    <div class="group-title" @click="toggleGroupInfoVisibility()">
      <header class="header">
        <div class="icon-container" :class="{ down: isGroupOpened }">
          <SvgIcon name="arrow" />
        </div>
        <h3 class="title">{{ information.group }}</h3>
      </header>
      <div class="underline" :class="[props.information.color]"></div>
    </div>
    <div class="group-container" :class="{ opened: isGroupOpened }">
      <div ref="techGroup" class="techGroup">
        <div
          class="technology-wraper"
          v-for="technology in props.information.technologies"
          :key="technology.name"
        >
          <SvgIcon
            :name="technology.iconName"
            :size="iconsSize"
            :translate="
              technology.iconName === 'pinia'
                ? translatePiniaIcon
                : technology.iconName === 'html' ||
                  technology.iconName === 'css'
                ? translateIcon
                : undefined
            "
          />
          <p class="technology-name">{{ technology.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/main.scss";
.technologies-group {
  @media screen and (min-width: $breackpoint-large) {
    width: 1065px;
  }
  .group-title {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .header {
      display: flex;
      align-items: center;
      .icon-container {
        transition: $transform-transition-05;
        --webkit-transition: $transform-transition-05;
        &.down {
          transform: rotate(540deg);
        }
      }
    }
    .underline {
      width: 100%;
      height: 10px;
      border-radius: 10px;
      @media screen and (max-width: $breackpoint-small) {
        height: 7px;
      }
      &.blue {
        background: $blue-gradient-opacity-90;
      }
      &.pink {
        background: $pink-gradient-opacity-90;
      }
      &.orange {
        background: $orange-gradient-opacity-90;
      }
    }
    .title {
      padding: 15px 30px;
      font-weight: $font-weight-bold;
      font-size: $font-size-p-desktop;
      color: $grey-dark;
      @media screen and (max-width: $breackpoint-small) {
        font-size: $font-size-button;
        padding: 10px 20px;
      }
    }
  }
  .group-container {
    margin: 30px;
    height: 0;
    overflow: hidden;
    opacity: 0;

    transition: $basic-transition-05;
    --webkit-transition: $basic-transition-05;

    &.opened {
      height: v-bind(groupHeight);
      opacity: 1;
      margin-bottom: 40px;
    }
    .techGroup {
      height: fit-content;
      display: flex;
      column-gap: 50px;
      row-gap: 50px;
      flex-wrap: wrap;
      justify-content: center;
      .technology-wraper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 90px;
        @media screen and (max-width: $breackpoint-small) {
          width: 70px;
        }

        .technology-name {
          color: $grey;
          text-align: center;
          font-size: $font-size-small;
          @media screen and (max-width: $breackpoint-small) {
            font-size: $font-size-smallest;
          }
        }
      }
    }
  }
}
</style>
