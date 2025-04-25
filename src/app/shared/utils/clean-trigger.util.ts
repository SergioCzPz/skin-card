import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const cleanScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(sc => sc.kill());
};
