import { useEffect, useState } from 'react';

import { navLinks } from '@/assets-data/assetsData';
import { NavLinkType } from '@/types';
import { HiMenuAlt1 } from 'react-icons/hi';
import NavLink from './NavLink';
import MobileNav from './MobileNav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggle = (val: boolean) => setOpen(val);

  useEffect(() => {
    const detectScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener('scroll', detectScroll);

    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScroll ? 'bg-solitude shadow-lg' : ''
      } fixed top-0 left-0 w-full  z-20`}
    >
      <div
        className={`${
          isScroll ? 'py-2 transition-all duration-200' : 'py-4'
        } container px-2 mx-auto flex justify-between items-center`}
      >
        <div className="flex items-center gap-4">
          {!open && (
            <HiMenuAlt1
              className="text-3xl cursor-pointer sm:hidden"
              onClick={() => toggle(true)}
            />
          )}
          <div className="text-xl text-teal font-bold uppercase tracking-wide ">
            skillex
          </div>
        </div>

        <nav>
          <ul className="hidden sm:flex sm:items-center sm:gap-4">
            {navLinks.map((nav: NavLinkType) => (
              <NavLink key={nav.id} {...nav} />
            ))}
          </ul>
        </nav>

        <button className="btn-type-1 bd-gray">Sign up</button>

        {open && <MobileNav toggle={toggle} />}
      </div>
    </div>
  );
};

export default Header;
