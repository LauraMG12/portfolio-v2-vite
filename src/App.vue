<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import TechnologiesSection from "./components/TechnologiesSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/Footer.vue";

import { isMobileNavigationOpened } from "@/state/AppState";

const isScrollPositionOnTop = ref<boolean>(true);
const body = document.body;

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
function updateScroll() {
  isScrollPositionOnTop.value = window.scrollY === 0;
}
watch(isMobileNavigationOpened, () => {
  if (isMobileNavigationOpened.value) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }
});
</script>

<template ref="app">
  <header
    id="navigation"
    :class="{
      'white-navigation': !isScrollPositionOnTop,
    }"
  >
    <NavigationBar />
  </header>
  <main id="content">
    <HomePage />
    <ProjectsSection />
    <TechnologiesSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </main>
  <footer>
    <FooterSection />
  </footer>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;
#app {
  #navigation {
    width: 100vw;
    position: fixed;
    z-index: $navigation-index;
    transition: $basic-transition-025;
    --webkit-transition: $basic-transition-025;
    &.white-navigation {
      background-color: $white;
      box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    }
  }
  #content {
    display: flex;
    flex-direction: column;
    gap: $sections-gap;
    position: relative;
  }
}
.fade {
  &-leave-from {
    opacity: 1;
  }
  &-leave-to {
    opacity: 0;
  }
  &-leave-active {
    transition: opacity 0.5s;
  }
}
</style>
