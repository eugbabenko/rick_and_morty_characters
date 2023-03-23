import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import './styles.scss';

import SearchBox from '../../components/search-box';
import FilterMenu from '../../components/filter-menu';
import CardList from '../../components/card-list';
import Pagination from '../../components/pagination';
import { getCharactersList } from '../../API';
import BASE_URL from '../../settings';
import { status, gender } from '../../components/filter-menu/filter-parameters';

function HomePage() {
  const [characters, setCharacters] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getCharactersList(BASE_URL, searchParams)
      .then((res) => {
        if (res.error) {
          setCharacters([]);
          console.log(res.error);
        } else {
          setCharacters({
            ...res,
            results: res.results.sort((a, b) => a.name.localeCompare(b.name)),
          });
        }
      })
      .catch((err) => alert(err));
  }, [searchParams]);

  return (
    <main className="container">
      <div className="home">
        <h1>
          <img alt="main-logo-title" src={`${process.env.PUBLIC_URL}/image/title.png`} />
        </h1>
        <SearchBox
          className="search-box"
          placeholder="Filter by name..."
          onSearchHandler={(event) =>
            setSearchParams({
              name: event.target.value.toLowerCase(),
            })
          }
          value={searchParams.get('name')}
        />
        <section className="filter-group">
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
          <button
            type="submit"
            onClick={() => {
              setSearchParams('');
              setPageNumber(1);
            }}
          >
            Clear filters
          </button>
        </section>
        <CardList characters={characters && characters.results} />
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
