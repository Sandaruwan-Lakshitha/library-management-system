import React, { useState } from "react";

import Table from "../../../componets/Table";
import { FluidContainer } from "../../../componets/CommonComponents";

import Book from "./Book";
const Books = ({ catalog }) => {
   const [selectedBookId, setselectedBookId] = useState(null);

   const handleTableRowClick = (id) => {
      setselectedBookId(id);
   };

   const handleBookViewBackClick = () => {
      setselectedBookId(null);
   };
   return (
      selectedBookId == null ?
      <FluidContainer>
         <Table
            data={catalog}
            handleRowClick={handleTableRowClick}
            instruction="Click row to view book"
         />
      </FluidContainer>
      : <Book id={selectedBookId} handleBackClick={handleBookViewBackClick}/>
   );
};

export default Books;
