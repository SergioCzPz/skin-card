import { Design } from '@shared/types/design.interface';
import { Testimonial } from '../types/testimonial';
import { Member } from '@shared/types/member.interface';

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

export const members: Member[] = [
  {
    name: 'Alice Johnson',
    position: 'Creative Director',
    description:
      'Alice brings innovative design ideas to life, enhancing your card experience with unique decals.',
    photoUrl: 'assets/images/workers/alice.jpg',
  },
  {
    name: 'Mark Smith',
    position: 'Operations Manager',
    description:
      'Mark ensures smooth operations, making your shopping experience seamless and enjoyable.',
    photoUrl: 'assets/images/workers/mark.jpg',
  },
  {
    name: 'Sophia Lee',
    position: 'Marketing Specialist',
    description:
      'Sophia crafts compelling campaigns to showcase our unique decal designs to the world.',
    photoUrl: 'assets/images/workers/sophia.jpg',
  },
  {
    name: 'James Brown',
    position: 'Customer Support',
    description:
      'James is dedicated to assisting customers with any inquiries regarding their decal purchases.',
    photoUrl: 'assets/images/workers/james.jpg',
  },
  {
    name: 'Emma Davis',
    position: 'Product Designer',
    description:
      'Emma designs eye-catching decals that reflect your personality and style.',
    photoUrl: 'assets/images/workers/emma.jpg',
  },
  {
    name: `We're hiring!`,
    position: 'Join Us',
    description:
      'Explore exciting career opportunities and become part of our innovative team.',
    photoUrl: 'assets/images/designs/hiring.jpg',
  },
];
