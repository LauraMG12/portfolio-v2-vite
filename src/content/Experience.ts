import { GradientType } from "../state/AppState";

interface ExperienceSectionInfo {
  sectionTitle: string;
  experiences: GroupedExperiences[];
}
export interface GroupedExperiences {
  color: GradientType;
  info: ExperienceInfo;
}

interface ExperienceInfo {
  companyName: string;
  companyLogo: string[];
  period: string;
  description: string;
  details: string[];
}

export const experience: ExperienceSectionInfo = {
  sectionTitle: "Experience",
  experiences: [
    {
      color: "blue",
      info: {
        companyName: "Sembo",
        companyLogo: ["/assets/sembo.webp"],
        period: "August 2022 - currently",
        description: `[Travel industry]`,
        details: [
          "Good practices and SOLID principles",
          "CI/CD",
          "Agile methodology (SCRUM)",
          "Multidisciplinary and international environment",
        ],
      },
    },
    {
      color: "pink",
      info: {
        companyName: "Courses and projects",
        companyLogo: ["/assets/udemy.webp", "/assets/frontend-masters.webp"],
        period: "August 2021 - currently",
        description: `[Autodidact]`,
        details: ["Organisation", "Quick learning", "Problem solving"],
      },
    },
    {
      color: "orange",

      info: {
        companyName: "Jan Choueiri - Management & consulting",
        companyLogo: ["/assets/jc-mc.webp"],
        period: "April 2022 - August 2022",
        description: `[Consultancy]`,
        details: ["TDD", "UI/UX", "Teamwork"],
      },
    },
  ],
};
