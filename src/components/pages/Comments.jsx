import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "../../utils/hooks/useFetch";

const Comments = () => {
  const {
    data: comments,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.org/comments");
  console.log(comments);
  return <div>Comments</div>;
};

export default Comments;
