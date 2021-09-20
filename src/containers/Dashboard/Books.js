import React from "react";

import Table from "../../componets/Table";
import { FluidContainer } from "../../componets/CommonComponents";

const Books = ({ catalog }) => {
   return (
      <FluidContainer>
         {/*catalog[0] ? catalog[0].title : "Still loading"*/}
         {<Table data={catalog} />}
      </FluidContainer>
   );
};

export default Books;
