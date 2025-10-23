interface AboutInfo {
  sectionTitle: string;
  name: string;
  position: string[];
  imageName: string;
  about: string;
}

export const about: AboutInfo = {
  sectionTitle: "About me",
  name: "Laura Mañogil González",
  position: ["Software engineer", "Web developer"],
  imageName: "/assets/about.webp",
  about: `${
    new Date().getFullYear() - 2022
  }+ years of experience as a dedicated web software engineer, specializing in building engaging, responsive, and scalable web applications using Vue.js, TypeScript, and JavaScript. Passionate about translating design concepts into seamless user experiences and optimizing performance for speed and reliability. A strong collaborator within cross-functional teams, committed to writing clean, maintainable code and continuously learning to stay aligned with industry best practices.`,
};
