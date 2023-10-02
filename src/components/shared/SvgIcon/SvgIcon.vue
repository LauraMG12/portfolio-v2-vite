<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import {
  IconColor,
  IconType,
  SvgIconSize,
  transformSvgPropsFormat,
  SvgIconTranslate,
  ICON_TYPE_MAP,
} from "./SvgIconHelper";

interface SvgIconProps {
  name: IconType;
  color?: IconColor;
  size?: SvgIconSize;
  translate?: SvgIconTranslate;
}

const props = defineProps<SvgIconProps>();

const settings = computed(() =>
  transformSvgPropsFormat(props.name, props.color, props.size, props.translate)
);
const iconPath = computed(() => {
  const name = ICON_TYPE_MAP[props.name];
  return defineAsyncComponent(() => import(`./icons/${name}.vue`));
});
</script>

<template>
  <Suspense>
    <component
      :is="iconPath"
      :width="settings.width"
      :height="settings.height"
      :viewBox="settings.viewBox"
      :style="settings.style"
      :class="props.name"
      class="icon"
    />
  </Suspense>
</template>
