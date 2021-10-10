import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import {
   Container,
   Button,
   FlexRow,
   ContainerInline,
} from "../../../componets/CommonComponents";
import Spinner from "../../../componets/Spinner";
import ConfirmationDialog from "../../../componets/ConfirmationDialog";
import LendDialog from "./LendDialog";

import {
   getBook,
   lendBook,
   returnBook,
   deleteBook,
} from "../../../api/bookAPI";
import BookCoverPlaceholder from "../../../shared/book_image.png";
import { getTodayDate } from "../../../shared/utils";

const CotainerInlineTextAlignLeft = styled(ContainerInline)`
   align-items: flex-start;
`;

const H1 = styled.h1`
   text-align: left;
`;

const H2 = styled.h2`
   text-align: left;
`;

function Book({ id, handleBackClick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [book, setBook] = useState(null);
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   const [showLendConfirmation, setShowLendConfirmation] = useState(false);
   const [showReturnConfirmation, setShowReturnConfirmation] = useState(false);

   const handleDelete = (confirmation) => {
      if (confirmation) {
         deleteBook(book.id);
      }
      setShowDeleteConfirmation(false);
   };

   const handleLend = (confirmed, memberId) => {
      if (confirmed) {
         lendBook(book.id, memberId, getTodayDate());
      }
      setShowLendConfirmation(false);
   };

   const handleReturn = (confirmed) => {
      if (confirmed) {
         returnBook(book.id);
      }
      setShowReturnConfirmation(false);
   };

   useEffect(() => {
      setIsLoading(true);
      getBook(id)
         .then((response) => {
            if (response.data) {
               setBook(response.data);
            }
         })
         .catch((error) => {
            console.log("error", error);
         })
         .finally(() => {
            setIsLoading(false);
         });
      return () => {};
   }, [id]);
   return (
      <>
         <Container>
            <Button onClick={handleBackClick} size={1.5}>
               <IoReturnUpBack />
            </Button>
            {!isLoading && book != null ? (
               <>
                  <FlexRow>
                     <CotainerInlineTextAlignLeft>
                        <H1>{book.title}</H1>
                        <H2>{`by ${book.author}`}</H2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua
                        </p>
                        {book.isAvailable ? (
                           ""
                        ) : (
                           <>
                              <h4>{`Borrowed by : ${book.burrowedMemberId}`}</h4>
                              <h4>{`Borrowed date : ${book.burrowedDate}`}</h4>
                           </>
                        )}
                     </CotainerInlineTextAlignLeft>
                     <ContainerInline>
                        <img
                           src={BookCoverPlaceholder}
                           alt="Book Cover place holder"
                           style={{
                              border: "1px solid black",
                              width: "70%",
                           }}
                        />
                     </ContainerInline>
                  </FlexRow>
                  <FlexRow>
                     {book.isAvailable ? (
                        <>
                           <Button
                              onClick={() => setShowLendConfirmation(true)}
                           >
                              Lend
                           </Button>
                           <Button
                              color="danger"
                              onClick={() => setShowDeleteConfirmation(true)}
                           >
                              Delete
                           </Button>
                        </>
                     ) : (
                        <Button onClick={() => setShowReturnConfirmation(true)}>
                           Return
                        </Button>
                     )}
                  </FlexRow>
               </>
            ) : (
               <Spinner />
            )}
         </Container>
         <ConfirmationDialog
            handleClose={handleDelete}
            show={showDeleteConfirmation}
            headerText="Confirm book deletion"
            detailText="Are you sure you wanr to delete this book? This action can't be undone."
         />
         <LendDialog show={showLendConfirmation} handleClose={handleLend} />
         <ConfirmationDialog
            handleClose={handleReturn}
            show={showReturnConfirmation}
            headerText="Confirm book return"
            detailText="Press 'Yes' to confirm return"
         />
      </>
   );
}

export default Book;
