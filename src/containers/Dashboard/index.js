import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Tabs from "../../componets/Tabs";
import Spinner from "../../componets/Spinner";

import Books from "../Dashboard/Books/index";

import { setBooks } from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";

export const Dashboard = () => {
   const [isLoading, setIsLoading] = useState(false);

   const books = useSelector((state) => state.books.value);
   const dispatch = useDispatch();

   useEffect(() => {
      setIsLoading(true);
      getBooks()
         .then((response) => {
            if (!response.error) {
               dispatch(setBooks(response.data));
            }
         })
         .catch((error) => {
            console.log("error",error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, [dispatch]);

   const contents = [
      { title: "Books", elements: <Books catalog={books} /> },
      { title: "Members", elements: <h1>Conetct of members go here</h1> },
   ];

   return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
