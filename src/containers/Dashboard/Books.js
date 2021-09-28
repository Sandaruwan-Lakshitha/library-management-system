import React from "react";

import Table from "../../componets/Table";
import { FluidContainer } from "../../componets/CommonComponents";

const Books = ({ catalog }) => {

   /*const updateCatalog=[
      ...catalog,
      {
         id: "3",
         title: "Harry Potter",
         author: "J. K. Rowling",
         isAvailable: true,
         burrowedMemberId: "",
         burrowedDate: "",
       },
       {
         id: "4",
         title: "Harry Potter",
         author: "J. K. Rowling",
         isAvailable: false,
         burrowedMemberId: "",
         burrowedDate: "",
       }

   ];*/

   const handleTsbleRowClick = (id) =>{
      console.log(id);
   }
   return (
      <FluidContainer>
         {/*catalog[0] ? catalog[0].title : "Still loading"*/}
         {<Table data={catalog} handleRowClick={handleTsbleRowClick} instruction="Click row to view book"/>}
      </FluidContainer>
   );
};

export default Books;
