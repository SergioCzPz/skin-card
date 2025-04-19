import { Design } from '@shared/types/design.interface';
import { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    name: 'Emily Johnson',
    photo: 'assets/images/customers/emily.jpg',
    position: 'Marketing Manager, ABC Corp',
    review: 'The Decals Are Vibrant And Easy To Apply',
  },
  {
    name: 'Michael Smith',
    photo: 'assets/images/customers/michael.jpg',
    position: 'Product Designer, XYZ Ltd',
    review: 'A Fantastic Way To Personalize My Card',
  },
  {
    name: 'Sarah Lee',
    photo: 'assets/images/customers/sarah.jpg',
    position: 'Sales Executive, DEF Inc',
    review: 'I Get Compliments On My Card All The Time!',
  },
];

export const designs: Design[] = [
  {
    name: 'Astronaout',
    imageUrl: 'assets/images/designs/astronaut.png',
    url: 'astronout',
  },
  {
    name: 'Astronauts',
    imageUrl: 'assets/images/designs/astronauts.png',
    url: 'astronauts',
  },
  {
    name: 'Blue Space',
    imageUrl: 'assets/images/designs/blue-space.png',
    url: 'blue-space',
  },
  { name: 'Dots', imageUrl: 'assets/images/designs/dots.png', url: 'dots' },
  { name: 'Mars', imageUrl: 'assets/images/designs/mars.png', url: 'mars' },
  { name: 'Moon', imageUrl: 'assets/images/designs/moon.png', url: 'moon' },
  {
    name: 'Orange Astronaut',
    imageUrl: 'assets/images/designs/orange-astronaut.png',
    url: 'orange-astronaut',
  },
  {
    name: 'Orange Planets',
    imageUrl: 'assets/images/designs/orange-planets.png',
    url: 'orange-planets',
  },
  {
    name: 'Orange Space',
    imageUrl: 'assets/images/designs/orange-space.png',
    url: 'orange-space',
  },
  {
    name: 'Purple Planets',
    imageUrl: 'assets/images/designs/purple-planets.png',
    url: 'purple-planets',
  },
  {
    name: 'Squares',
    imageUrl: 'assets/images/designs/squares.png',
    url: 'squares',
  },
  {
    name: 'White Dots',
    imageUrl: 'assets/images/designs/white-dots.png',
    url: 'white-dots',
  },
];
