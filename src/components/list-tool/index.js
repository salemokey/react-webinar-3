import React from 'react';

const Pagination = ({ pages }) => {
  return (
    <div>
      {pages.map(p => (
          <button key={p}>{p}</button>
      ))}
    </div>
  );
};

export default Pagination;
