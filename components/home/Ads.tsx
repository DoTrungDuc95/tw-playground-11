import { logos } from '@/assets-data/assetsData';

import { motion } from 'framer-motion';

const Ads = () => {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="section pt-24">
      <div className="md:flex md:justify-center md:items-center">
        <div className="min-w-[40%]">
          <span className="font-bold text-xs text-teal mb-4">
            your e-learning partner
          </span>
          <h2 className="text-[1.825rem] sm:text-[2.5rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </h2>
          <p className="description max-w-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            labore, magni incidunt sed eaque mollitia esse dolor a beatae velit
            facilis! Quisquam, qui. Tenetur dolorem cupiditate adipisci. Earum,
            tempore quis.
          </p>
          <div className="mt-6">
            <button className="btn-type-1 text-white bg-teal mr-4">
              Get start
            </button>
            <button className="btn-type-1 bd-gray">Discover</button>
          </div>
        </div>

        <div>
          <img src={'/images/hero.png'} alt="" loading="lazy" />
        </div>
      </div>

      <div>
        <p className="text-xl text-center mb-8">
          We collaborate with{' '}
          <span className="text-teal">
            100+ leading universities and companies
          </span>
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, i) => (
            <motion.div key={i} variants={item} className="w-28">
              <img src={logo} alt="" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ads;
