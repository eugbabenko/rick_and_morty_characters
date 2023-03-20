import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.scss';

import getCharactersList from '../../API';
import BASE_URL from '../../settings';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCharactersList(BASE_URL, searchParams).then((res) => {
      setCharacters(res.results.sort((a, b) => a.name.localeCompare(b.name)));
    });
  }, [searchParams]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchParams({
      name: searchFieldString,
    });
  };

  return (
    <div className="container">
      <h1>
        <img alt="main-logo-title" src={`${process.env.PUBLIC_URL}/image/title.png`} />
      </h1>
      <SearchBox
        className="search-box"
        placeholder="Filter by name..."
        onSearchHandler={onSearchChange}
      />
      <CardList characters={characters} />
    </div>
  );
}

export default HomePage;
