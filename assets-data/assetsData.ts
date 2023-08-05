import { FiPenTool } from 'react-icons/fi';
import { FaLaptopCode } from 'react-icons/fa';
import { BsBarChartLine } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

import { AccordionType, CategoryType, CourseType, NavLinkType } from '@/types';

export const navLinks: NavLinkType[] = [
  {
    id: 1,
    href: 'home',
    link: 'Home',
  },
  {
    id: 2,
    href: 'about',
    link: 'About',
  },
  {
    id: 3,
    href: 'courses',
    link: 'Courses',
  },
  {
    id: 4,
    href: 'teacher',
    link: 'Teacher',
  },
  {
    id: 5,
    href: 'contact',
    link: 'Contact',
  },
];

export const categories: CategoryType[] = [
  {
    id: 1,
    icon: FiPenTool,
    category: 'Design',
  },
  {
    id: 2,
    icon: FaLaptopCode,
    category: 'Development',
  },
  {
    id: 3,
    icon: BsBarChartLine,
    category: 'Business',
  },
  {
    id: 4,
    icon: MdOutlineScience,
    category: 'Science',
  },
];

export const courses: CourseType[] = [
  {
    id: 1,
    image: '/images/courses1.jpg',
    category: 'Web Design',
    title: 'The Complete Web Design Course',
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: '/images/courses2.jpg',
    category: 'Web Development',
    title: 'FullStack Web Development Course',
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: '/images/courses3.jpg',
    category: 'Web Development',
    title: 'Python Beginner to Advanced Course',
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: '/images/courses4.jpg',
    category: 'Web Design',
    title: 'UI/UX Design Crazy Course With Harrys',
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: '/images/courses5.jpg',
    category: 'AI Development',
    title: 'AI Development With Python (complete beginner course)',
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: '/images/courses6.jpg',
    category: 'Web Design',
    title: 'The Complete Web Design Course',
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 7,
    image: '/images/courses7.jpg',
    category: 'Web Design',
    title: 'The Complete Web Design Course',
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 8,
    image: '/images/courses8.jpg',
    category: 'Web Design',
    title: 'The Complete Web Design Course',
    rating: 4.9,
    participants: 500,
    price: 105,
  },
];

export const logos = [
  '/images/logo1.png',
  '/images/logo2.png',
  '/images/logo3.png',
  '/images/logo4.png',
  '/images/logo5.png',
  '/images/logo6.png',
];

export const accordions: AccordionType[] = [
  {
    id: 1,
    title: 'What is Skillex?',
  },
  {
    id: 2,
    title: 'What can I learn from Skillex?',
  },
  {
    id: 3,
    title: 'Can I teach on Skillex?',
  },
  {
    id: 4,
    title: 'What is included in my Skillex membership?',
  },
];
