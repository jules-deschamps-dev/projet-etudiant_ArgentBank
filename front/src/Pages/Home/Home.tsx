import React from 'react';
import { Footer, Nav } from '../../Components/';
import { Banner, Features } from './Components';

const Home: React.FC = () => {
  return (
    <>
      <Nav />

      <main>
        <Banner />
        <Features />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
