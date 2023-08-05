import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="text-center max-w-[600px] mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold mb-5">
          Subscrible newletter
        </h3>
        <p className="description mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          voluptatum natus provident officia praesentium eaque voluptatibus
          tenetur impedit vitae veritatis at culpa maiores obcaecati nisi, eos
          voluptate illo, repudiandae iusto!
        </p>

        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <input
            placeholder="Enter your email"
            className="w-60 sm:w-72 text-sm p-2 sm:p-3 shadow-md outline-none"
          />
          <button
            type="button"
            className="text-sm text-white p-2 sm:p-3 shadow-md
             bg-teal font-bold"
          >
            Subcrible
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
