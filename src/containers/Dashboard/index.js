import React, { useState, useEffect } from "react";

import Tabs from "../../componets/Tabs";
import Spinner from "../../componets/Spinner";

import Books from "./Books";

import { getBooks } from "../../api/bookAPI";

export const Dashboard = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [book, setBook] = useState([]);
   
   useEffect(() => {
      setIsLoading(true);
         getBooks()
         .then((response) => {
            if (!response.error) {
               console.log("response",response.data);
               setBook(response.data);
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   },[]);

   const contents = [
      { title: "Books", elements: <Books catalog={book} /> },
      { title: "Members", elements: <h1>Conetct of members go here</h1> },
   ];
   
   return isLoading ? <Spinner /> : book.length>0 && <Tabs contents={contents}/> ;
};

export default Dashboard;
