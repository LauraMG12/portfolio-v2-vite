<script setup lang="ts">
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import AppPill from "./shared/AppPill/AppPill.vue";
import DarkButton from "./shared/AppButtons/DarkButton.vue";
import { isTouchDevice } from "@/state/AppState";

import { about } from "../content/About";

const aboutImage = new URL(about.imageName, import.meta.url).href;
const iconSize = { width: 30, height: 30 };

function openCV(): void {
  window.open("CV.pdf");
}
</script>

<template>
  <section id="aboutSection" class="content">
    <h2 class="section-title">{{ about.sectionTitle }}</h2>
    <div class="about-header">
      <h3>{{ about.name }}</h3>
      <div class="about-subheader">
        <AppPill :name="about.position" color="light" class="frontend-pill" />
      </div>
    </div>
    <div class="about-content">
      <div class="image-container">
        <img
          alt="professional image"
          class="image"
          :src="aboutImage"
          loading="lazy"
        />
      </div>
      <div class="about">
        <p>
          {{ about.about }}
        </p>
        <div class="links-container">
          <DarkButton text="Open CV" icon-name="download" @click="openCV()" />
          <div class="circle-links">
            <div class="link">
              <a
                aria-label="Open LinkedIn profile"
                href="https://www.linkedin.com/in/laura-ma%C3%B1ogil-gonz%C3%A1lez-30489b14a/"
                target="_blank"
                rel="noreferrer"
                :class="{ colored: isTouchDevice() }"
              >
                <SvgIcon name="linkedin" :size="iconSize" />
              </a>
            </div>
            <div class="link">
              <a
                aria-label="Open Github profile"
                href="https://github.com/LauraMG12"
                target="_blank"
                rel="noreferrer"
                :class="{ colored: isTouchDevice() }"
              >
                <SvgIcon name="github" :size="iconSize" />
              </a>
            </div>
            <div class="link">
              <a
                aria-label="Compose an email"
                href="mailto:laura.lmg12@gmail.com"
                :class="{ colored: isTouchDevice() }"
              >
                <SvgIcon name="mail" :size="iconSize" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "@/styles/main.scss";
#aboutSection {
  display: flex;
  flex-direction: column;
  .about-header {
    display: flex;
    align-items: baseline;
    margin-bottom: 35px;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      gap: 15px;
      margin-bottom: 15px;
      align-items: center;
    }
    & .frontend-pill {
      height: 25px;
      margin: 0 45px;

      @media screen and (max-width: $breackpoint-medium) {
        margin: 0 45px 0 0;
      }
      @media screen and (max-width: $breackpoint-small) {
        margin: 0 15px 0 0;
      }
    }
  }
  .about-content {
    display: flex;
    width: 100%;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      align-items: center;
    }
    & .image-container {
      position: relative;
      width: 40%;
      aspect-ratio: 4/3;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 50px;
      background-color: #f6f8fb;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      @media screen and (max-width: $breackpoint-medium) {
        margin-right: 0;
        margin-bottom: 15px;
        width: 60%;
      }
      @media screen and (max-width: $breackpoint-small) {
        width: 100%;
      }
      & .image {
        height: 100%;
        object-fit: contain;
      }
    }
    & .about {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 50px;
      @media screen and (max-width: $breackpoint-medium) {
        align-items: center;
        text-align: left;
        gap: 25px;
        width: 100%;
      }
      & .links-container {
        display: flex;
        gap: 50px;
        align-items: center;
        @media screen and (max-width: $breackpoint-medium) {
          flex-direction: column;
        }
        & .circle-links {
          display: flex;
          gap: 30px;
          & .link {
            cursor: pointer;
            border-radius: 30px;
            &:hover {
              @media (hover: hover) {
                & a {
                  color: $blue-dark;
                  transform: rotateY(360deg);
                }
              }
            }
            & a {
              transition: $basic-transition-05;
              width: 50px;
              height: 50px;
              border-radius: 30px;
              background-color: $grey-light;
              display: flex;
              align-items: center;
              justify-content: center;
              &.colored {
                color: $blue-dark;
              }
            }
          }
        }
      }
    }
  }
}
</style>
