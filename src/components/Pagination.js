import React, { useState } from 'react';

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number} 
          onClick={() => handlePageClick(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
