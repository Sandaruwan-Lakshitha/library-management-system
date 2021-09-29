import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import {
   Container,
   Button,
   FlexRow,
   ContainerInline,
} from "../../componets/CommonComponents";
import Spinner from "../../componets/Spinner";

import { getBook } from "../../api/bookAPI";
import BookCoverPlaceholder from "../../shared/book_image.png";

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
   }, [id]);
   return (
      <Container>
         <Button onClick={handleBackClick}>
            <IoReturnUpBack />
         </Button>
         {!isLoading && book != null ? (
            <>
               <FlexRow>
                  <CotainerInlineTextAlignLeft>
                     <H1>{book.title}</H1>
                     <H2>{`by ${book.author}`}</H2>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                     </p>
                     {book.isAvailable ? (
                        ""
                     ) : (
                        <>
                           <h4>{`Borrowed by : ${book.borrowedMemberId}`}</h4>
                           <h4>{`Borrowed date : ${book.borrowedDate}`}</h4>
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
                        <Button onClick={() => console.log("Call lend API")}>
                           Lend
                        </Button>
                        <Button
                           danger
                           onClick={() => console.log("Call lend API")}
                        >
                           Delete
                        </Button>
                     </>
                  ) : (
                     <>
                        <h4>{`Borrowed by : ${book.borrowedMemberId}`}</h4>
                        <h4>{`Borrowed date : ${book.borrowedDate}`}</h4>
                        <Button onClick={() => console.log("Call return API")}>
                           Return
                        </Button>
                     </>
                  )}
               </FlexRow>
            </>
         ) : (
            <Spinner />
         )}
      </Container>
   );
}

export default Book;
