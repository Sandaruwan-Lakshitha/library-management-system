import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Tabs from "../../componets/Tabs";
import Spinner from "../../componets/Spinner";

import Books from "../Dashboard/Books/index";

import {setBooks} from "../../store/booksSlice";
import { getBooks } from "../../api/bookAPI";

export const Dashboard = () => {
   const [isLoading, setIsLoading] = useState(false);
   //const [book, setBook] = useState([]);

   const booksFromRedux = useSelector((state) => state.books.value);
   const dispatch = useDispatch();

   useEffect(() => {
      setIsLoading(true);
      getBooks()
         .then((response) => {
            if (!response.error) {
               console.log(response.data);
               dispatch(setBooks(response.data));
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, [dispatch]);

   const contents = [
      { title: "Books", elements: <Books catalog={booksFromRedux} /> },
      { title: "Members", elements: <h1>Conetct of members go here</h1> },
   ];

   return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
