import { accordions } from '@/assets-data/assetsData';
import Accordion from './Accordion';

const Teacher = () => {
  return (
    <section id="teacher" className="section">
      <div className="grid-2-col mb-12">
        <div className="pl-5">
          <h3 className="text-2xl sm:text-3xl font-bold capitalize mb-5">
            become <span className="text-teal">an instructor</span> <br /> of
            out platform
          </h3>
          <p className="description mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            natus aperiam qui vero necessitatibus sunt ipsam ut nemo est nam,
            quos doloribus odio rem possimus tempore alias laudantium quo porro?
          </p>

          <button className="btn-type-1 text-white bg-teal capitalize">
            start teaching
          </button>
        </div>

        <div className="p-4 md:row-start-1 md:w-3/4">
          <img src="/images/teacher1.png" alt="" loading="lazy" />
        </div>
      </div>

      <div className="grid-2-col mb-12">
        <div className="pl-5">
          <h3 className="text-2xl sm:text-3xl font-bold capitalize mb-5">
            become <span className="text-teal">an instructor</span> <br /> of
            out platform
          </h3>
          <p className="description mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            natus aperiam qui vero necessitatibus sunt ipsam ut nemo est nam,
            quos doloribus odio rem possimus tempore alias laudantium quo porro?
          </p>

          <button className="btn-type-1 text-white bg-teal capitalize">
            get start
          </button>
        </div>

        <div className="p-4 md:w-3/4">
          <img src="/images/teacher2.png" alt="" loading="lazy" />
        </div>
      </div>

      <div className="max-w-[700px] mx-auto">
        <h3 className="text-2xl sm:text-3xl text-center capitalize font-bold my-8">
          frequently <span className="text-teal">asked questions</span>
        </h3>
        {accordions.map((acc) => (
          <Accordion key={acc.id} {...acc} />
        ))}
      </div>
    </section>
  );
};

export default Teacher;
