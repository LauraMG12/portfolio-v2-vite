<script setup lang="ts">
interface AppLoadingDotsProps {
  type: "white" | "dark";
}

const props = defineProps<AppLoadingDotsProps>();
</script>

<template>
  <div :class="{ 'app-loading-dots': true, [props.type]: true }">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </div>
</template>

<style lang="scss" scoped>
.app-loading-dots {
  height: 21px;
  padding: 0 10px;
  display: flex;
  align-items: center;

  &.white {
    .dot {
      background-color: $white;
    }
  }

  &.black {
    .dot {
      background-color: $black;
    }
  }

  .dot {
    width: 4px;
    height: 4px;
    margin: 0 4px;
    border-radius: 50%;
    animation: loading-dots 0.6s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes loading-dots {
  0%,
  20%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
}
</style>
