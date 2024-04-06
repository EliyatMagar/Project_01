import React from 'react';
import Sub_companies from './Sub_companies';
import PopularCategory from './PopularCategory';
import About from './About';
import Add from './Add';
import Hero_section from "./Hero_section"
import Footer from './Footer';
import Sub_jobs from './Sub_jobs';

const Home = () => {
  return (
    <>
      <div className=''>
        <Hero_section/>
        <PopularCategory/>
        <Sub_jobs/>
        <Sub_companies/>
        <About/>
        <Add/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
