import styled from "styled-components";

const StyledTable = styled.table`
   border: none;
   border-collapse: separate;
   td,
   th {
      border: none;
      padding: 8px;
   }
   td {
      padding: 5px 10px;
   }
   tbody tr {
      :nth-of-type(odd) {
         background-color: #efefef;
      }
      :hover {
         background-color: lightpink;
      }
      
   }
   thead > tr {
      background-color: #c2c2c2;
   }
`;

const TableMarkup = ({ titles, data }) => {
   return (
      <StyledTable>
         <colgroup>
            {titles.map((title, index) => {
             return   <col key={index} />;
            })}
         </colgroup>
         <thead>
            <tr>
               {titles.map((title, index) => {
                return  <th key={index}>{title}</th>;
               })}
            </tr>
         </thead>
         <tbody>
            {data.map((item, index) => {
               return(
                <tr key={index}>
                {titles.map((title, index) => {
                  return <td key={index}>{item[title]}</td>;
                })}
             </tr>
               );
            })}
         </tbody>
      </StyledTable>
   );
};

const Table = ({data}) => <TableMarkup titles={Object.keys(data[0])} data={data} />;

export default Table;