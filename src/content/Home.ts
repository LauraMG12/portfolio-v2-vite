import { GradientType } from "../state/AppState";

interface HomeInfo {
  name: string;
  position: string;
  linkedIn: linkedinInfo;
  contact: contactInfo;
}
interface AppHighlights {
  text: string;
  color: GradientType;
}

interface linkedinInfo {
  text: string;
  href: string;
}
interface contactInfo {
  text: string;
  goTo: string;
}

export const highlights: AppHighlights[] = [
  { text: "Passionate", color: "blue" },
  { text: "Adaptable", color: "pink" },
  { text: "Methodical", color: "orange" },
];

export const home: HomeInfo = {
  name: "Laura Mañogil González",
  position: "frontend developer",
  linkedIn: {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/laura-ma%C3%B1ogil-gonz%C3%A1lez-30489b14a/",
  },
  contact: { text: "Contact", goTo: "contactSection" },
};
