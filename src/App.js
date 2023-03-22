/* eslint-disable import/no-extraneous-dependencies */
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import Home from './Pages/Home';
import Character from './Pages/Character';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Character />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
