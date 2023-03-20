import './styles.scss';

function SearchBox({ className, placeholder, onSearchHandler }) {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
}

export default SearchBox;
