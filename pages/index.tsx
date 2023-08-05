import Abouts from '@/components/home/Abouts';
import Ads from '@/components/home/Ads';
import Teacher from '@/components/home/teacher/Teacher';
import Courses from '@/components/home/courses/Courses';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Ads />
      <Abouts />
      <Courses />
      <Teacher />
      <Contact />
    </>
  );
}
