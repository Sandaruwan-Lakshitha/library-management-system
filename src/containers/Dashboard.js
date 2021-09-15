import Tabs from "../componets/Tabs";

export const Dashboard = () => {
   const contents = [
      { title: "Books", elements: <h1>Conetct of books go here</h1> },
      { title: "Members", elements: <h1>Conetct of members go here</h1> },
   ];

   return (
      <>
         <Tabs contents={contents} />
      </>
   );
};

export default Dashboard;
