import { navLinks } from '@/assets-data/assetsData';
import { NavLinkType } from '@/types';

import NavLink from '@/components/header/NavLink';

import { HiX } from 'react-icons/hi';

type MobileNavProps = {
  toggle: (val: boolean) => void;
};

const MobileNav = ({ toggle }: MobileNavProps) => {
  return (
    <ul className="fixed inset-0 z-30 bg-teal text-white flex flex-col justify-center items-center gap-8 sm:hidden">
      {navLinks.map((nav: NavLinkType) => (
        <NavLink key={nav.id} {...nav} closeNav={toggle} />
      ))}
      <HiX
        className="absolute top-4 right-4 text-3xl cursor-pointer"
        onClick={() => toggle(false)}
      />
    </ul>
  );
};

export default MobileNav;
