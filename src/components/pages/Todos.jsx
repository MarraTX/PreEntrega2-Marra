import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "../../utils/hooks/useFetch";
import { usePaginate } from "../../utils/hooks/usePaginate";
import { Button } from "@mui/material";

const Todos = () => {
  const {
    data: posts,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.org/posts");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {
    currentArray,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePaginate(posts, itemsPerPage);

  return (
    <div>
      {currentArray.map((post) => (
        <h2 key={post.id}>{post.slug}</h2>
      ))}
      <Button
        variant="contained"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </Button>
      <h2>
        Pagina {currentPage} de {totalPages}
      </h2>
      <Button
        variant="contained"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </Button>
      <Button
        variant={itemsPerPage === 5 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(5);
          setCurrentPage(1);
        }}
      >
        5
      </Button>
      <Button
        variant={itemsPerPage === 10 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(10);
          setCurrentPage(1);
        }}
      >
        10
      </Button>
      <Button
        variant={itemsPerPage === 15 ? "contained" : "outlined"}
        onClick={() => {
          setItemsPerPage(15);
          setCurrentPage(1);
        }}
      >
        15
      </Button>
    </div>
  );
};

export default Todos;
