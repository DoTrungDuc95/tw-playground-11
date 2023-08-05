import { Poppins } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from './Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${poppins.className} bg-solitude`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
