import { ref } from "vue";

export type GradientType = "blue" | "pink" | "orange";

/* RESPONSIVE */
const mediumBreackpoint = 992;
const smallBreackpoint = 576;

export const isSmallDevice = ref(window.innerWidth < mediumBreackpoint);
export const isMobileDevice = ref(window.innerWidth < smallBreackpoint);

window.addEventListener("resize", () => {
  isSmallDevice.value = window.innerWidth < mediumBreackpoint;
  isMobileDevice.value = window.innerWidth < smallBreackpoint;
});

export function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

/* NAVIGATION */
export const isMobileNavigationOpened = ref<boolean>(false);
export function toggleNavigationState(): void {
  isMobileNavigationOpened.value = !isMobileNavigationOpened.value;
}

export function scrollToSection(targetId: string): void {
  const section = document.getElementById(targetId);
  const top = section?.offsetTop;
  if (top && top !== 0) {
    const scrollTo = top - 100;
    window.scroll({ top: scrollTo, left: 0, behavior: "smooth" });
  } else {
    window.scroll({ top: top, left: 0, behavior: "smooth" });
  }
  isMobileNavigationOpened.value = false;
}
