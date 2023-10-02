<script setup lang="ts">
import { technologies } from "../content/Technologies";
import TechnologyGroup from "./shared/AppTechnologyGroup/TechnologyGroup.vue";
</script>

<template>
  <section id="technologiesSection" class="content">
    <h2 class="section-title">{{ technologies.sectionTitle }}</h2>
    <div class="technologies-container">
      <TechnologyGroup
        v-for="technologyGroup in technologies.technologies"
        :key="technologyGroup.group"
        :information="technologyGroup"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '@/styles/main.scss';
#technologiesSection {
  display: flex;
  flex-direction: column;
  & .technologies-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
