import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

import Table from "../../../componets/Table";
import {
   FluidContainer,
   Button,
   Container,
} from "../../../componets/CommonComponents";

import Book from "./Book";
import AddBookDialog from "./AddBookDialog";

import { addBook } from "../../../api/bookAPI";
import { addBook as addBookToStore } from "../../../store/booksSlice";

const Books = ({ catalog }) => {
   const [selectedBookId, setselectedBookId] = useState(null);
   const [showAddBookDialog, setShowAddBookDialog] = useState(false);

   const dispatch = useDispatch();

   const handleTableRowClick = (id) => {
      setselectedBookId(id);
   };

   const handleBookViewBackClick = () => {
      setselectedBookId(null);
   };

   const handleAddBook = (confirmed, data) => {
      if (confirmed) {
         addBook(data)
         .then((response)=>{
            if(!response.error){
               dispatch(addBookToStore(response.data));
            }
         })
         .catch((error)=>{
            console.log("error",error);
         });
      }
      setShowAddBookDialog(false);
   };

   return selectedBookId == null ? (
      <>
         <FluidContainer>
            <Container
               flexDirection="row"
               justifyContent="flex-end"
               alignItems="flex-start"
            >
               <Button rounded onClick={() => setShowAddBookDialog(true)}>
                  <IoAddSharp/>
               </Button>
            </Container>
            <Table
               data={catalog}
               handleRowClick={handleTableRowClick}
               instruction="Click row to view book"
            />
         </FluidContainer>
         <AddBookDialog show={showAddBookDialog} handleClose={handleAddBook} />
      </>
   ) : (
      <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
   );
};

export default Books;
