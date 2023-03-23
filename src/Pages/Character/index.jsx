import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './styles.scss';

import CharacterInfo from '../../components/character-info';

import BASE_URL from '../../settings';
import { getCharacterByID } from '../../API';

function CharacterPage() {
  const [character, setCharacter] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacterByID(BASE_URL, params.id)
      .then((res) => {
        setCharacter(res);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, [params]);

  return (
    <section className="container">
      <button className="btn-go-back" type="submit" onClick={() => navigate(-1)}>
        <svg
          className="svg-button"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black" />
        </svg>
        Go back
      </button>
      <div className="character-data">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Informations</p>
      </div>
      <div className="character-info">
        <CharacterInfo className="character-info-row" title="Gender" text={character.gender} />
        <CharacterInfo className="character-info-row" title="Status" text={character.status} />
        <CharacterInfo className="character-info-row" title="Specie" text={character.species} />
        <CharacterInfo
          className="character-info-row"
          title="Location"
          text={character.location?.name}
        />
        <CharacterInfo
          className="character-info-row"
          title="Origin"
          text={character.origin?.name}
        />
        <CharacterInfo className="character-info-row" title="Type" text={character.type} />
      </div>
    </section>
  );
}

export default CharacterPage;
