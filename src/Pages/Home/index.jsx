import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.scss';

import SearchBox from '../../components/search-box';
import FilterMenu from '../../components/filter-menu';
import CardList from '../../components/card-list';
import Pagination from '../../components/pagination';
import Login from '../../components/Login';

import { getCharactersList } from '../../API';
import { status, gender } from '../../components/filter-menu/filter-parameters';

function HomePage() {
  const [characters, setCharacters] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCharactersList(searchParams)
      .then((res) => {
        if (res.error) {
          setCharacters([]);
          console.log(res.error);
        } else {
          setCharacters({
            ...res,
            results: res.results.sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            ),
          });
        }
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleClearQueryString = useCallback(() => {
    setSearchParams('');
    setPageNumber(1);
  }, []);

  const handleSearch = useCallback(
    (event) => {
      setSearchParams((params) => {
        const newParams = new URLSearchParams(params);
        newParams.set('name', event.target.value.toLowerCase());
        newParams.set('page', 1);
        return newParams;
      });
    },
    [setSearchParams]
  );

  const handleStatusChange = useCallback(
    (event) => {
      setSearchParams((params) => {
        const newParams = new URLSearchParams(params);
        newParams.set('status', event.target.value);
        newParams.set('page', 1);
        return newParams;
      });
    },
    [setSearchParams]
  );

  const handleGenderChange = useCallback(
    (event) => {
      setSearchParams((params) => {
        const newParams = new URLSearchParams(params);
        newParams.set('gender', event.target.value);
        newParams.set('page', 1);
        return newParams;
      });
    },
    [setSearchParams]
  );

  return (
    <main className="container">
      <div className="home">
        <Login />
        <h1>
          <img alt="main-logo-title" src={`${process.env.PUBLIC_URL}/image/title.png`} />
        </h1>
        <SearchBox
          className="search-box"
          placeholder="Filter by name..."
          onSearchHandler={handleSearch}
          value={searchParams.get('name')}
        />
        <section className="filter-group">
          <FilterMenu
            type="status"
            parameters={status}
            value={searchParams.get('status')}
            onChangeValue={handleStatusChange}
          />
          <FilterMenu
            type="gender"
            parameters={gender}
            value={searchParams.get('gender')}
            onChangeValue={handleGenderChange}
          />
          <button type="submit" onClick={handleClearQueryString}>
            Clear filters
          </button>
        </section>
        {isLoading ? (
          <div className="loader">
            <p>Loading</p>
          </div>
        ) : (
          <CardList characters={characters && characters.results} />
        )}
        <Pagination
          info={characters && characters.info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setSearchParams={setSearchParams}
        />
      </div>
    </main>
  );
}

export default HomePage;
