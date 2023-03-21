import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.scss';
import BASE_URL from '../../settings';
import { getCharacterByID } from '../../API';
import CharacterInfo from '../../components/character-info';

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
    <section>
      <button type="submit" onClick={() => navigate(-1)}>
        Go back
      </button>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Informations</p>
      <CharacterInfo title="Gender" text={character.gender} />
      <CharacterInfo title="Status" text={character.status} />
      <CharacterInfo title="Specie" text={character.species} />
      <CharacterInfo title="Location" text={character.location?.name} />
      <CharacterInfo title="Origin" text={character.origin?.name} />
      <CharacterInfo title="Type" text={character.type} />
    </section>
  );
}

export default CharacterPage;
