import './styles.scss';

function SearchBox({ className, placeholder, onSearchHandler, value }) {
  const defaultValue = value === null ? '' : value;

  return (
    <input
      value={defaultValue}
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
}

export default SearchBox;
