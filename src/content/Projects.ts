import { GradientType } from "../state/AppState";
import { IconType } from "../components/shared/SvgIcon/SvgIconHelper";

interface ProjectsSectionInfo {
  sectionTitle: string;
  projects: ProjectOverview[];
  subProjects: SubProjectInfo[];
}
interface ProjectOverview {
  id: number;
  color: GradientType;
  info: ProjectInfo;
}
export interface SubProjectInfo {
  id: number;
  title: string;
  image: string;
  description: string;
  runTo: string;
  codeTo?: string;
  inProgress?: boolean;
}

export interface ProjectInfo {
  title: string;
  technologies: Technology[];
  image: string;
  description: string;
  runTo: string;
  codeTo?: string;
}

interface Technology {
  name: string;
  iconName: IconType;
}

export const projects: ProjectsSectionInfo = {
  sectionTitle: "Projects",
  projects: [
    {
      id: 1,
      color: "blue",
      info: {
        title: "Sembo - Trip planner",
        technologies: [
          { name: "Sass", iconName: "sass" },
          { name: "TypeScript", iconName: "ts" },
          { name: "Vue3", iconName: "vue" },
          { name: "Jest", iconName: "jest" },
          { name: "Cypress", iconName: "cypress" },
          { name: "RxJs", iconName: "rxjs" },
          { name: "GraphQL", iconName: "graphql" },
          { name: "StoryBook", iconName: "storybook" },
        ],
        image: "/assets/trip-planner.webp",
        description: `As a Sembo Trip Planner key member, I contributed to develop an innovative travel tool that allows users to effortlessly crate full travel experiences integrating accommodation, transportation, and activities. Enhancing the travel experience, making it more enjoyable and accessible for everyone.`,
        runTo:
          "https://www.sembo.co.uk/travel/plan?pax=rpp&day=2023-10-28&suggest=Cheapest&rt=1",
      },
    },
    // {
    //   id: 2,
    //   color: "pink",
    //   info: {
    //     title: "Project title",
    //     technologies: [
    //       { name: "HTML", iconName: "html" },
    //       { name: "CSS3", iconName: "css" },
    //       { name: "Sass", iconName: "sass" },
    //       { name: "JavaScript", iconName: "js" },
    //       { name: "TypeScript", iconName: "ts" },
    //       { name: "Vue3", iconName: "vue" },
    //       { name: "Jest", iconName: "jest" },
    //       { name: "Bitbucket", iconName: "bitbucket" },
    //       { name: "RxJs", iconName: "rxjs" },
    //     ],
    //     image: "home-background.webp",
    //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //      aliquip ex ea commodo consequat.`,
    //     runTo: ".",
    //     codeTo: ".",
    //   },
    // },
    // {
    //   id: 3,
    //   color: "orange",
    //   info: {
    //     title: "Project title",
    //     technologies: [
    //       { name: "HTML", iconName: "html" },
    //       { name: "CSS3", iconName: "css" },
    //       { name: "Sass", iconName: "sass" },
    //       { name: "JavaScript", iconName: "js" },
    //       { name: "TypeScript", iconName: "ts" },
    //       { name: "Vue3", iconName: "vue" },
    //       { name: "Jest", iconName: "jest" },
    //       { name: "Bitbucket", iconName: "bitbucket" },
    //       { name: "RxJs", iconName: "rxjs" },
    //     ],
    //     image: "home-background.webp",
    //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //      aliquip ex ea commodo consequat.`,
    //     runTo: ".",
    //     codeTo: ".",
    //   },
    // },
  ],
  subProjects: [
    {
      id: 1,
      title: "To do list",
      image: "/assets/todo.webp",
      description: `Responsive Todo List application, developed using Vue.js and TypeScript`,
      runTo: "https://github.com/LauraMG12/Todo",
    },
    {
      id: 2,
      title: "Users table",
      image: "/assets/users-list.webp",
      description: `Project to improve API data and state management`,
      runTo: "https://github.com/LauraMG12/users-table",
    },
    {
      id: 3,
      title: "Online store",
      image: "/assets/store.webp",
      description: `Project part of the Udemy course
      NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)`,
      runTo: "https://github.com/LauraMG12/Shop",
      inProgress: true,
    },
    {
      id: 4,
      title: "Lecture list",
      image: "/assets/lecture-list.webp",
      description: `Project to practice skills in handling user interactions, state management, data filtering and code structure`,
      runTo: "https://github.com/LauraMG12/Lecture-list",
      inProgress: true,
    },
  ],
};
