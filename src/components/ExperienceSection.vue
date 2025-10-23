<script setup lang="ts">
import { experience } from "../content/Experience";
import AppExperience from "../components/shared/AppExperience/AppExperience.vue";
</script>

<template>
  <section id="experienceSection" class="content">
    <h2 class="section-title">{{ experience.sectionTitle }}</h2>
    <article class="experience-container">
      <AppExperience
        v-for="singleExperience in experience.experiences"
        :info="singleExperience"
        :key="singleExperience.color"
      />
    </article>
  </section>
</template>
<style scoped lang="scss">
@import "@/styles/main.scss";
#experienceSection {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $breackpoint-large) {
    width: 100%;
  }
  .experience-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
