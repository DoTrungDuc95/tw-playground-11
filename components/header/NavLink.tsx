import { Link } from 'react-scroll';

type NavLinkProps = {
  href: string;
  link: string;
  closeNav?: (val: boolean) => void;
};

const NavLink = ({ href, link, closeNav }: NavLinkProps) => {
  return (
    <li className="list-none cursor-pointer">
      <Link
        to={href}
        spy
        smooth
        duration={500}
        offset={-100}
        className="font-bold transition-all duration-300"
        onClick={() => {
          if (closeNav) closeNav(false);
        }}
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
