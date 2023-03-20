import './styles.scss';

function Card({ character }) {
  const { name, species, image } = character;
  return (
    <div className="card-container">
      <img alt={name} src={image} />
      <h2>{name}</h2>
      <p>{species}</p>
    </div>
  );
}

export default Card;
