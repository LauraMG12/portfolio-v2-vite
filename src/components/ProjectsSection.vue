<script setup lang="ts">
import AppProject from "./shared/AppProject/AppProject.vue";
import SubProjectCard from "./shared/AppProject/SubProjectCard.vue";

import { projects } from "../content/Projects";
</script>

<template>
  <section id="projectsSection" class="content">
    <h2 class="section-title">{{ projects.sectionTitle }}</h2>
    <article class="projects-container">
      <AppProject
        v-for="project in projects.projects"
        :key="project.id"
        :color="project.color"
        :information="project.info"
        :id="project.id"
      />
    </article>
  </section>
  <article class="sub-projects">
    <SubProjectCard
      v-for="subProject in projects.subProjects"
      :key="subProject.id"
      :information="subProject"
    />
  </article>
</template>
<style scoped lang="scss">
#projectsSection {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: -3rem;
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
.sub-projects {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 40px;
  @media screen and (max-width: $breackpoint-large) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: $breackpoint-small) {
    gap: 20px;
    padding: 0 20px;
  }
  @media screen and (max-width: $breackpoint-small) {
    gap: 10px;
    padding: 0 10px;
  }
}
</style>
