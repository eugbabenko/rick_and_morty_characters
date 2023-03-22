import ReactPaginate from 'react-paginate';

import './styles.scss';

function Pagination({ pageNumber, info, setPageNumber, setSearchParams }) {
  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
    setSearchParams((searchParams) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', data.selected + 1);
      return newParams;
    });
  };

  return (
    <ReactPaginate
      className="pagination"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      pageCount={info?.pages}
      onPageChange={pageChange}
    />
  );
}

export default Pagination;
