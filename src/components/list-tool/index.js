import React from 'react';

const Pagination = ({ pages, onChangePage }) => {
  return (
    <div>
      {pages.map(p => (
        <button onClick={() => onChangePage(p)} key={p}>
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
