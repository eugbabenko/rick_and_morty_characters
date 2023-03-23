import { Link } from 'react-router-dom';

import './styles.scss';

import CharacterInfo from '../character-info';

function Card({ character }) {
  const { name, species, image, id } = character;

  return (
    <div className="card-container">
      <Link to={`/${id}`}>
        <img alt={name} src={image} />
        <CharacterInfo className="card-description" title={name} text={species} />
      </Link>
    </div>
  );
}

export default Card;
