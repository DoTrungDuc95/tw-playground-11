import { IconType } from 'react-icons';

export type CourseType = {
  id: number;
  image: string;
  category: string;
  title: string;
  rating: number;
  participants: number;
  price: number;
};

export type NavLinkType = {
  id: number;
  href: string;
  link: string;
};

export type CategoryType = {
  id: number;
  icon: IconType;
  category: string;
};

export type AccordionType = {
  id: number;
  title: string;
};
