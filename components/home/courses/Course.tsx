import { CourseType } from '@/types';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';

type CourseProps = Omit<CourseType, 'id'>;

const Course = ({
  category,
  image,
  price,
  rating,
  title,
  participants,
}: CourseProps) => {
  return (
    <article className="bg-white min-w-[15rem] p-2 rounded-md shadow-lg">
      <img src={image} alt="" loading="lazy" />
      <span className="mt-2 text-xs text-teal cursor-pointer">{category}</span>
      <h3 className="text-sm font-bold mt-2 cursor-pointer">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="course-flex-with-icon">
          <div className="course-icon">
            <AiOutlineUser className="text-teal" />
          </div>
          <span className="text-xs font-bold">{participants}</span>
        </div>

        <div className="course-flex-with-icon">
          <div className="course-icon">
            <AiOutlineStar className="text-yellow" />
          </div>
          <span className="text-xs font-bold">{rating}</span>
        </div>
      </div>

      <div className="text-sm text-end font-bold mt-2">
        price: $<span>{price}</span>
      </div>
    </article>
  );
};

export default Course;
