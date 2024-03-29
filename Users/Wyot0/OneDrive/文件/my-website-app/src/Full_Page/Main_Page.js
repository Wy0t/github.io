
import React from 'react';
import '.././css/Main_Page.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main_content from '../components/Main_content';
import Portfolio from '.././portfolio/Portfolio';

function Main_Page() {
  return (
      <> 
        <Navbar />
        <div className="Main">
            <Main_content />
            <hr />
            <Portfolio />
        </div>
        <Footer /> 
      </>
  );
}

export default Main_Page;
