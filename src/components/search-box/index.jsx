import './styles.scss';

function SearchBox({ className, placeholder, onSearchHandler, value }) {
  return (
    <input
      value={value}
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
}

export default SearchBox;
