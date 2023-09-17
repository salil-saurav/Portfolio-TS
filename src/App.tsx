import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar/Navbar";
import { Container } from "@mui/material";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Banner />
      <Container>
        <Cards />
      </Container>
    </>
  );
};

export default App;
