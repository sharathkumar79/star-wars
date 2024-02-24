// Pagination.js
import React from 'react';

const Pagination = ({ fetchPage, nextPage, prevPage }) => {
  return (
    <div className="pagination">
      {prevPage && (
        <button className="pagination-button" onClick={() => fetchPage(prevPage)}>
          Previous Page
        </button>
      )}
      {nextPage && (
        <button className="pagination-button" onClick={() => fetchPage(nextPage)}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
