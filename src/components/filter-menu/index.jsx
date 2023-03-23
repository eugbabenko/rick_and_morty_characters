import { useMemo } from 'react';
import './styles.scss';

function FilterMenu({ onChangeValue, type, parameters, value }) {
  const defaultValue = useMemo(() => value ?? 'default', [value]);

  return (
    <div className="filter-couple">
      <p>{type}</p>
      <select value={defaultValue} onChange={onChangeValue}>
        <option disabled value="default">{`choose ${type}`}</option>
        {parameters.map((parameter) => (
          <option key={parameter} value={parameter}>
            {parameter}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterMenu;
