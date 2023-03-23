import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Character from './Pages/Character';
import ScrollToTop from './components/scrool-to-top';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Character />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
