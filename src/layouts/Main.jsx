import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className='h-screen'>
      <Header />
      <main className='container mx-auto '>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
