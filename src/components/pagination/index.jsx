import { useEffect, useState } from 'react';
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

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <ReactPaginate
      className="pagination"
      nextLabel="Next"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      pageCount={info?.pages}
      onPageChange={pageChange}
    />
  );
}

export default Pagination;
