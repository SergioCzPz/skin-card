import { WritableSignal } from '@angular/core';
import { NgtVector3 } from 'angular-three';
import { gsap } from 'gsap';
import { Group, Object3DEventMap } from 'three';

export const animateModel = (
  trigger: string,
  model: Group<Object3DEventMap>,
  position: WritableSignal<NgtVector3>
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#moon-card',
      start: -1,
      end: 'bottom',
    },
    onStart: () => {
      console.log('onStart');
    },
    onComplete: () => {
      position.set([0, 0, 0]);
    },
  });

  tl.to(
    model.rotation,
    {
      duration: 1.5,
      x: 1.57,
      y: 0,
      z: 4.71,
      ease: 'power2.out',
    },
    0
  );

  tl.to(
    model.position,
    {
      duration: 3,
      x: 0,
      y: 0,
      z: 0,
      ease: 'power2.out',
    },
    0
  );

  tl.to(
    model.rotation,
    {
      duration: 1.5,
      x: 1.57,
      y: 0,
      z: 1.57,
      ease: 'power2.out',
    },
    1
  );
};
