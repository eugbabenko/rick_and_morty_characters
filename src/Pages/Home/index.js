import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.scss';

import getCharactersList from '../../API';
import BASE_URL from '../../settings';
import { status, gender } from '../../components/filter-menu/filter-parameters';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';
import Pagination from '../../components/pagination';
import FilterMenu from '../../components/filter-menu';

function HomePage() {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { info, results } = dataFromServer;

  useEffect(() => {
    getCharactersList(BASE_URL, searchParams)
      .then((res) => {
        if (res.error) {
          setCharacters([]);
          setDataFromServer([]);
          console.log(res.error);
        } else {
          setDataFromServer(res);
          setCharacters(res.results.sort((a, b) => a.name.localeCompare(b.name)));
        }
      })
      .catch((err) => alert(err));
  }, [searchParams]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchParams({
      name: searchFieldString,
    });
  };
  console.log(searchParams.get('name'));
  return (
    <div className="container">
      <h1>
        <img alt="main-logo-title" src={`${process.env.PUBLIC_URL}/image/title.png`} />
      </h1>
      <SearchBox
        className="search-box"
        placeholder="Filter by name..."
        onSearchHandler={onSearchChange}
        value={searchParams.get('name')}
      />
      <FilterMenu
        type="status"
        parameters={status}
        value={searchParams.get('status')}
        onChangeValue={(e) =>
          setSearchParams((params) => {
            const newParams = new URLSearchParams(params);
            newParams.set('status', e.target.value);
            newParams.set('page', 1);
            return newParams;
          })
        }
      />
      <FilterMenu
        type="gender"
        parameters={gender}
        value={searchParams.get('gender')}
        onChangeValue={(e) =>
          setSearchParams((params) => {
            const newParams = new URLSearchParams(params);
            newParams.set('gender', e.target.value);
            newParams.set('page', 1);
            return newParams;
          })
        }
      />
      <button type="submit" onClick={() => setSearchParams('')}>
        Clear filters
      </button>
      <CardList characters={characters} />
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default HomePage;
