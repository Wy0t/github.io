/*color use
  222831
  393E46
  00ADB5
  EEEEEE
*/
import React from 'react';
import './App.css';
import Navbar from '.././components/Navbar/Navbar';
import Portfolio from '.././portfolio/Portfolio';
import Footer from '.././components/Footer/Footer';
import Main_content from '.././Content/Main_content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Githubapi from '.././githubapi/githubapi';

function App() {
  return (
      <>
      <Router basename='/github.io'>   
        <Navbar />

        <div className="App">
          <Routes>
            <Route path='/' element={<>
              <Main_content />
              <hr />
              <Portfolio />
            </>} />
            <Route path='/git' element={<Githubapi />} />
          </Routes>
        </div>

        <Footer /> 
        </Router>
      </>
      
  );
}

export default App;
