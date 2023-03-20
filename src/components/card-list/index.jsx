import './styles.scss';
import Card from '../card';

function CardList({ characters }) {
  if (characters.length === 0) return <div>There is nothing</div>;

  return (
    <div className="card-list">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CardList;
