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
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageCount={info?.pages}
      onPageChange={pageChange}
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
}

export default Pagination;
