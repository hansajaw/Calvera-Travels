import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';
import MultiFAB from "./FloatingChats";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTA />
      <Footer />
      <MultiFAB />
    </>
  );
};

export default Layout;
