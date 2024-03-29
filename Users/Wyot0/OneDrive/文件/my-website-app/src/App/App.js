/*color use
  222831
  393E46
  00ADB5
  EEEEEE
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main_Page from '.././Full_Page/Main_Page';
import Github_Page from '.././Full_Page/Github_Page';

function App() {
  return (
      <> 
        <Routes>
          <Route path='/' Component={Main_Page} />
          <Route path='/git' Component={Github_Page} />
        </Routes>
      </>
  );
}

export default App;
