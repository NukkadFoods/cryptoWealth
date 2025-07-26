import React from 'react';
import Hero from '../components/Hero';
import InvestmentPlans from '../components/InvestmentPlans';
import WalletComponent from '../components/Wallet';
import Stats from '../components/Stats';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <InvestmentPlans />
      <WalletComponent />
      <Stats />
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default Home;
