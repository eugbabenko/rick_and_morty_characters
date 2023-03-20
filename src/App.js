import { useState, useEffect } from 'react';

import './App.scss';

import getCharactersList from './API/index';
import BASE_URL from './settings';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersList(BASE_URL).then((res) => setCharacters(res.results));
  });

  // const onSearchChange = (event) => {
  //   const searchFieldString = event.target.value.toLowerCase();
  //   setSearchField(searchFieldString);
  // };
  return (
    <div className="container">
      <h1>
        <img alt="main-logo-title" src={`${process.env.PUBLIC_URL}/image/title.png`} />
      </h1>
      <SearchBox
        className="search-box"
        placeholder="Filter by name..."
        // onSearchHandler={onSearchChange}
      />
      <CardList characters={characters} />
    </div>
  );
}

export default App;
