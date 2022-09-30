import { Container } from "@mui/system";
import NavBar from "../Components/NavBar/NavBar";
import { LayoutProps } from "./Layout.props";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">{children}</main>
    </Container>
  );
}

export default Layout;
