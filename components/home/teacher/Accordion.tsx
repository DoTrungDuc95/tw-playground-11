import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { AccordionType } from '@/types';

import { BsChevronDown } from 'react-icons/bs';

type AccordionProps = AccordionType;

const Accordion = ({ title, id }: AccordionProps) => {
  const [activedIndex, setActivedIndex] = useState<number | null>(null);

  const handlerClick = (id: number) => {
    setActivedIndex(id === activedIndex ? null : id);
  };
  return (
    <div className="mb-8">
      <label
        className="flex items-center justify-between text-base sm:text-xl font-bold cursor-pointer"
        onClick={() => handlerClick(id)}
      >
        <span>{title}</span>
        <BsChevronDown
          className={`${
            id === activedIndex ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300`}
        />
      </label>

      <AnimatePresence>
        {id === activedIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className="p-4 pb-0"
          >
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              ut et, excepturi vel ducimus incidunt ea distinctio, quae
              similique ipsum officia non porro magnam iste velit reiciendis
              impedit tempora adipisci.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
