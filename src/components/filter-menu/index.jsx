import './styles.scss';

function FilterMenu({ value, onChangeValue, parameters }) {
  return (
    <select value={value} onChange={onChangeValue}>
      <option disabled selected value>
        -- select an option --
      </option>
      {parameters.map((parameter) => (
        <option key={parameter} value={parameter}>
          {parameter}
        </option>
      ))}
    </select>
  );
}

export default FilterMenu;
