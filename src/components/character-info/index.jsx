import './styles.scss';

function CharacterInfo({ title, text }) {
  const checkedText = text || 'unknown';

  return (
    <div>
      <h4>{title}</h4>
      <p>{checkedText}</p>
    </div>
  );
}

export default CharacterInfo;
