import { Container } from "@mui/material";
import Logo from "../assets/Logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import CallIcon from "@mui/icons-material/Call";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-outer">
      <Container>
        <div className="navbar-inner">
          <div className="nav-logo-container">
            <span className="logo-img">
              <a href="/">
                <img className="Logo" src={Logo} alt="Logo" />
              </a>
            </span>
            <a className="logo-name" href="/">
              Salil Saurav
            </a>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="#">
                  <LinkedInIcon />
                </a>
                <span className="linkedin">Linkedin</span>
              </li>
              <li>
                <a href="#">
                  <GitHubIcon />
                </a>
                <span className="github">Github</span>
              </li>
              <li>
                <a href="#">
                  <ArticleIcon />
                </a>
                <span className="resume">Resume</span>
              </li>
              <li>
                <a href="tel:7701990393">
                  <CallIcon />
                </a>
                <span className="call">Call</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
