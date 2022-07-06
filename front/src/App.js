import React from 'react';
import Home from './home';
import Character from './character';
import Episode from './episode';
import Location from './location';
import Result from './result';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/character' element={<Character />} />
        <Route path='/episode' element={<Episode />} />
        <Route path='/location' element={<Location />} />
        <Route path='/result/:route/:id' element={<Result />} />
      </Routes>
  </Router>
  );
}

export default App;