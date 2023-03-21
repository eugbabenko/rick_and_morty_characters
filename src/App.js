/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import Home from './Pages/Home';
import Character from './Pages/Character';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
