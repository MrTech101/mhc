import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Banner from '@/app/components/Banner';
import Categories from '@/app/components/Categories';
import Navbar from '@/app/components/Navbar';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};
export default Homepage;
