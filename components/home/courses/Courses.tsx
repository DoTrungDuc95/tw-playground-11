import { CategoryType, CourseType } from '@/types';
import { categories, courses } from '@/assets-data/assetsData';

import Course from './Course';
import Category from './Category';

import { motion } from 'framer-motion';

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div id="courses" className="section">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-5">
          Our top <span className="text-teal">Categories</span>
        </h3>
        <p className="description max-w-[700px] mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          aperiam distinctio reprehenderit, aliquam ab reiciendis iusto
          voluptatibus placeat illo obcaecati fugiat deserunt ullam repudiandae
          minima, eligendi aut rerum. Obcaecati, maxime.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
      >
        {categories.map((c: CategoryType) => (
          <Category key={c.id} {...c} />
        ))}
      </motion.div>

      <div className="overflow-x-hidden">
        <h3 className="text-xl font-bold capitalize mb-12">
          Most popular courses
        </h3>
        <div className="flex gap-8 w-[480%] xs:w-[340%] sm-[w-170%] md:w-full animate-slide">
          {courses.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
