import { useMemo } from 'react';

function CharacterInfo({ title, text, className }) {
  const checkedText = useMemo(() => text || 'unknown', [text]);

  return (
    <div className={className}>
      <h6>{title}</h6>
      <p>{checkedText}</p>
    </div>
  );
}

export default CharacterInfo;
