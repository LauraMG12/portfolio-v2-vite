import { IconType } from "@/components/shared/SvgIcon/SvgIconHelper";
import { GradientType } from "../state/AppState";

interface TechnologiesSectionInfo {
  sectionTitle: string;
  technologies: GroupedTechnologies[];
}
export interface GroupedTechnologies {
  color: GradientType;
  group: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const technologies: TechnologiesSectionInfo = {
  sectionTitle: "Technologies",
  technologies: [
    {
      color: "blue",
      group: "Front end - Delivery",
      technologies: [
        {
          name: "HTML",
          iconName: "html",
        },
        {
          name: "CSS",
          iconName: "css",
        },
        { name: "Sass", iconName: "sass" },
        { name: "JavaScript", iconName: "js" },
        { name: "TypeScript", iconName: "ts" },
        { name: "Vue3", iconName: "vue" },
        { name: "Vite", iconName: "vite" },
        { name: "Pinia", iconName: "pinia" },
        { name: "Jest", iconName: "jest" },
        { name: "Cypress", iconName: "cypress" },
        { name: "GraphQL", iconName: "graphql" },
        { name: "RxJs", iconName: "rxjs" },
        { name: "StoryBook", iconName: "storybook" },
      ],
    },
    {
      color: "pink",
      group: "Front end - Discovery",
      technologies: [
        {
          name: "Figma",
          iconName: "figma",
        },
        {
          name: "Google Analytics",
          iconName: "googleAnalytics",
        },
        {
          name: "Google Tag Manager",
          iconName: "googleTagManager",
        },
        {
          name: "Hotjar",
          iconName: "hotjar",
        },
        {
          name: "Statsig",
          iconName: "statsig",
        },
      ],
    },
    {
      color: "orange",
      group: "Others",
      technologies: [
        { name: "Bitbucket", iconName: "bitbucket" },
        { name: "Github", iconName: "githubTech" },
        { name: "Netlify", iconName: "netlify" },
        { name: "Git", iconName: "git" },
        { name: "NodeJs", iconName: "nodejs" },
        { name: "Express", iconName: "express" },
        { name: "MySQL", iconName: "mysql" },
      ],
    },
  ],
};
