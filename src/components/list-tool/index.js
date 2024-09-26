import React from 'react';
import ReactPaginate from 'react-paginate';
import './style.css';

const Pagination = ({ pages, onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName={'Pagination-break'}
        containerClassName={'Pagination-container'}
        activeClassName={'Pagination-active'}
        pageClassName={'Pagination-page'}
        onPageChange={e => onChangePage(e.selected + 1)}
        previousLabel={null}
        nextLabel={null}
        pageRangeDisplayed={3}
        pageCount={pages.length}
        marginPagesDisplayed={1}
        
      />

    </div>
  );
};

export default Pagination;
