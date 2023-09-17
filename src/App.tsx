import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./Navbar/Sidebar";
import { Container } from "@mui/material";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <Banner />
      <Container>
        <Cards />
      </Container>
      <Footer />
    </>
  );
};

export default App;
