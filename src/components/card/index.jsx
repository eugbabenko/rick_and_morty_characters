import { Link } from 'react-router-dom';
import CharacterInfo from '../character-info';
import './styles.scss';

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
