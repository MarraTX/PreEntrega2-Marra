import { useState } from "react";

export const usePaginate = (array, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(array.length / itemsPerPage);

  const currentArray = array.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return {
    currentArray,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
