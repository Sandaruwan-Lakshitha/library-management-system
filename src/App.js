import React from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";

import { Main, Footer } from "./componets/layout";
import { NavBar, NavItem, NavLink } from "./componets/Navbar";

import { Dashboard } from "./containers/Dashboard";

function App() {
   const theme = {
      primary: {
         main: "#29b6f6",
         light: "#73e8ff",
         dark: "#0086c3",
         textColor: "#800",
      },
      secondary: {
         main: "#fff",
      },
   };
   return (
      <ThemeProvider theme={theme}>
         <NavBar>
            <NavItem>
               <NavLink href="#">
                  <BsBookHalf></BsBookHalf>
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink href="#">Catalog</NavLink>
            </NavItem>
            <NavItem>
               <NavLink href="#">Dashboard</NavLink>
            </NavItem>
         </NavBar>
         <Main>this is the main compopnets
           <Dashboard></Dashboard>
         </Main>
         <Footer>This is the footer</Footer>
      </ThemeProvider>
   );
}

export default App;
