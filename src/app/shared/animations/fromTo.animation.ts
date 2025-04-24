import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const fromTo = (target: gsap.TweenTarget, start: string | number) => {
  if (target === null) return;
  gsap.fromTo(
    target,
    {
      y: '5rem',
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: target.toString(),
        start: start,
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    }
  );
};
