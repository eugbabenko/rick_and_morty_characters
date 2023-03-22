import './styles.scss';

function CharacterInfo({ title, text, className }) {
  const checkedText = text || 'unknown';

  return (
    <div className={className}>
      <h6>{title}</h6>
      <p>{checkedText}</p>
    </div>
  );
}

export default CharacterInfo;
