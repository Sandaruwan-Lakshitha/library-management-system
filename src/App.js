import { Header, Main, Footer } from "./componets/layout";
import { NavBar, NavItem, NavLink } from "./componets/Navbar";

function App() {
  return (
    <>
      <Header>
        <NavBar>
          <NavItem href="#">
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>Dashboard</NavLink>
          </NavItem>

        </NavBar>
      </Header>
      <Main>this is the main compopnets</Main>
      <Footer>This is the footer</Footer>
    </>
  );
}

export default App;
