<script setup lang="ts">
import { isSmallDevice } from "@/state/AppState";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import AppForm from "./shared/AppForm/AppForm.vue";

import { contact } from "../content/Contact";
</script>

<template>
  <section id="contactSection" class="content">
    <div class="contact-header">
      <SvgIcon v-if="!isSmallDevice" name="bubble" />
      <div class="info">
        <div class="info-title">
          <h3 class="contact-title">{{ contact.contactQuestion }}</h3>
          <SvgIcon v-if="!isSmallDevice" name="dashed" />
        </div>
        <h4>{{ contact.contactMessage }}</h4>
        <a
          id="ContactEmailButton"
          aria-label="Compose an email"
          :href="`mailto:${contact.professionalEmail}`"
          class="email-container"
        >
          <div class="blue-overlay" />
          <SvgIcon name="mail" />
          <div class="email">
            <p>{{ contact.professionalEmail }}</p>
          </div>
        </a>
      </div>
    </div>
    <AppForm />
  </section>
</template>

<style scoped lang="scss">
#contactSection {
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: $breackpoint-large) {
    width: 100%;
  }
  @media screen and (max-width: $breackpoint-medium) {
    padding: 0;
    flex-direction: column;
  }
  .contact-header {
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $breackpoint-medium) {
      width: 100%;
    }
    .info {
      position: absolute;
      top: 145px;
      left: 115px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media screen and (max-width: $breackpoint-medium) {
        position: relative;
        top: 0;
        left: 0;
        gap: 10px;
      }
      .info-title {
        position: relative;
        h3 {
          font-weight: 700;
        }
        &:deep(.dashed) {
          cursor: default;
          position: absolute;
          top: 30%;
          right: 0;
          transform: translateX(60%);
        }
      }
      .email-container {
        display: flex;
        margin-top: 30px;
        gap: 10px;
        width: fit-content;
        align-items: center;
        position: relative;
        &:hover {
          cursor: pointer;
          @media (hover: hover) {
            .blue-overlay {
              width: 105%;
            }
          }
        }
        @media screen and (max-width: $breackpoint-medium) {
          margin-top: 20px;
        }
        .blue-overlay {
          position: absolute;
          top: -2.5px;
          left: -5px;
          width: 35px;
          height: 35px;
          border-radius: 30px;
          background: $blue-gradient-opacity-90;
          transition: $basic-transition-025;
          --webkit-transition: $basic-transition-025;
          @media screen and (max-width: $breackpoint-medium) {
            width: 105%;
            height: 30px;
          }
        }
        .email {
          width: fit-content;
          position: relative;
          p {
            @media screen and (max-width: $breackpoint-small) {
              font-size: $font-size-small;
            }
          }
        }
      }
    }
  }
}
</style>
