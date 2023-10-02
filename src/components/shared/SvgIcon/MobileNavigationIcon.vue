<script setup lang="ts">
import { isMobileNavigationOpened } from "@/state/AppState";
import { ref } from "vue";
const elementLoaded = ref<boolean>(false);
</script>

<template>
  <div
    class="icon-container"
    :class="{
      cross: isMobileNavigationOpened,
      'burger-menu': elementLoaded && !isMobileNavigationOpened,
    }"
    @click.once="elementLoaded = true"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/main.scss';
.icon-container {
  width: 24px;
  cursor: pointer;
}

span {
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: $grey-dark;
}

span + span {
  margin-top: 6px;
}

.cross span:nth-child(1) {
  animation: top 0.5s ease forwards;
}

.burger-menu span:nth-child(1) {
  animation: top-2 0.5s ease forwards;
}

.cross span:nth-child(2) {
  animation: scaled 0.5s ease forwards;
}

.burger-menu span:nth-child(2) {
  animation: scaled-2 0.5s ease forwards;
}

.cross span:nth-child(3) {
  animation: bottom 0.5s ease forwards;
}

.burger-menu span:nth-child(3) {
  animation: bottom-2 0.5s ease forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 8px;
    transform: rotate(0) scale(0.4);
  }
  100% {
    top: 8px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 8px;
    transform: rotate(45deg);
  }
  50% {
    top: 8px;
    transform: rotate(0deg) scale(0.4);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 8px;
    transform: rotate(0) scale(0.4);
  }
  100% {
    bottom: 8px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 8px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 8px;
    transform: rotate(0) scale(0.4);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
