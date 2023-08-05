import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 'auto' }}
      transition={{ duration: 0.5 }}
      className="text-white bg-teal p-10"
    >
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-start gap-8">
        <div className="grid">
          <label className="font-bold mb-8">Get Started</label>
          <div>
            <p className="text-sm leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, veniam totam iste pariatur, est inventore
              eligendi, suscipit accusamus iusto quaerat facere nulla minima
              voluptatum sed nesciunt aspernatur. Eius, optio vero.
            </p>
          </div>
        </div>

        <div className="grid">
          <label className="font-bold mb-8">Services</label>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-sm hover:underline">
              Science
            </a>
            <a href="" className="text-sm hover:underline">
              Digital Maketing
            </a>
          </div>
        </div>

        <div className="grid">
          <label className="font-bold mb-8">Company</label>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Term & Conditions
            </a>
          </div>
        </div>

        <div className="grid">
          <label className="font-bold mb-8">Follow us</label>
          <span className="text-sm mb-4 block">skillex@gmail.com</span>
          <span className="text-sm mb-4 block">+0988 888 888</span>
          <div className="flex gap-4">
            <a href="" className="text-xl">
              <BsFacebook />
            </a>
            <a href="" className="text-xl">
              <BsInstagram />
            </a>
            <a href="" className="text-xl">
              <BsPinterest />
            </a>
            <a href="" className="text-xl">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
