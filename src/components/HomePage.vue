<script setup lang="ts">
import { computed, ref } from "vue";
import { highlights, home } from "../content/Home";

import DarkButton from "./shared/AppButtons/DarkButton.vue";
import LightButton from "./shared/AppButtons/LightButton.vue";
import { scrollToSection } from "@/state/AppState";

const homeContent = ref<HTMLDivElement | null>(null);
const backgroundImage = new URL("/assets/home-background.webp", import.meta.url)
  .href;
const homeContentHeight = computed(
  () => `${homeContent.value?.clientHeight}px`
);
const highlightsIndex = ref<number>(0);
setInterval(() => {
  highlightsIndex.value < highlights.length - 1
    ? highlightsIndex.value++
    : (highlightsIndex.value = 0);
}, 2000);
</script>

<template>
  <img :src="backgroundImage" :style="{ display: 'none' }" />
  <section id="homePage" class="content">
    <div class="background" />
    <div class="home-content" ref="homeContent">
      <h1>{{ home.name }}</h1>
      <div class="subtitle">
        <div class="subtitle-highlight">
          <Transition name="highlight">
            <div
              :key="highlightsIndex"
              class="hightlight"
              :class="[`${highlights[highlightsIndex].color}-highlight`]"
            >
              <h2>
                {{ highlights[highlightsIndex].text }}
              </h2>
            </div>
          </Transition>
        </div>
        <h2>{{ home.position }}</h2>
      </div>
      <div class="buttons-container">
        <DarkButton
          id="homePageLinkedInButton"
          :text="home.linkedIn.text"
          :href="home.linkedIn.href"
          icon-name="linkedin"
          class="home-button"
        />
        <LightButton
          id="homePageContactButton"
          :text="home.contact.text"
          :gradient-color="highlights[highlightsIndex].color"
          @click="scrollToSection(home.contact.goTo)"
        />
      </div>
    </div>
    <div class="transition" />
  </section>
</template>

<style scoped lang="scss">
#homePage {
  height: 100dvh;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    background: url("/assets/home-background.webp"), $grey-light 50%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
  .home-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(50dvh - (v-bind(homeContentHeight) / 2));
    gap: 50px;
    white-space: nowrap;
    .subtitle {
      display: flex;
      flex-direction: row;

      width: 100%;
      justify-content: center;

      @media screen and (max-width: $breackpoint-medium) {
        flex-direction: column;
        align-items: center;
      }

      .subtitle-highlight {
        width: 26%;
        margin-right: 0.95rem;
        position: relative;
        overflow: hidden;
        @media screen and (max-width: $breackpoint-large) {
          width: 19vmax;
          margin-right: 0.55rem;
        }
        @media screen and (max-width: $breackpoint-medium) {
          margin: 0;
          width: 32vmin;
          height: 7vmin;
        }
        .hightlight {
          position: absolute;
          right: 0;
          &.blue-highlight {
            background: $blue-gradient-90;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          &.pink-highlight {
            background: $pink-gradient-90;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          &.orange-highlight {
            background: $orange-gradient-90;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        h2 {
          font-weight: $font-weight-bold;
        }
      }
    }
    .buttons-container {
      display: flex;
      gap: 36px;
      margin-top: 50px;
      @media screen and (max-width: $breackpoint-small) {
        width: 100%;
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }
      .home-button {
        width: 185px;
      }
    }
  }
  .transition {
    position: absolute;
    top: calc(100dvh - 7rem + 1px);
    left: 0;
    height: 7rem;
    width: 100vw;
    background: $white-gradient;
  }
}
.highlight {
  &-enter-from,
  &-leave-to {
    opacity: 0;
    position: absolute;
  }
  &-enter-to,
  &-leave-from {
    opacity: 1;
    position: absolute;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease-in;
  }
}
</style>
