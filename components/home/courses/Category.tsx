import { CategoryType } from '@/types';

import { motion } from 'framer-motion';

type CategoryProps = Omit<CategoryType, 'id'>;

const Category = ({ icon: Icon, category }: CategoryProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col gap-4 items-center p-8 bg-white rounded-md"
    >
      <div className="text-4xl text-teal">
        <Icon />
      </div>
      <span className="block font-bold">{category}</span>
      <a href="" className="text-sm text-gray">
        View more
      </a>
    </motion.div>
  );
};

export default Category;
