import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const staggerAnimation = (
  targets: gsap.TweenTarget,
  trigger: string,
  start: string | number
) => {
  gsap.fromTo(
    targets,
    {
      y: '5rem',
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: trigger,
        start: start,
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power2.inOut',
    }
  );
};
