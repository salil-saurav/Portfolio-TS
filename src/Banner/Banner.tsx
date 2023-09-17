import "./Banner.css";
import { Container } from "@mui/material";
import ReactLogo from "../assets/Logo/React.svg";
import JavaScriptLogo from "../assets/Logo/JS.svg";
import MongoDBLogo from "../assets/Logo/mongoDB.svg";
import NodeJSLogo from "../assets/Logo/Node.svg";
import ApiLogo from "../assets/Logo/API.svg";
import NPMLogo from "../assets/Logo/npm.svg";
import PhpLogo from "../assets/Logo/php.svg";
import BootstrapLogo from "../assets/Logo/Bootstrap.svg";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner-body">
          <h1>{`Hello I'm Salil Saurav`}</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Dedicated Full-Stack Developer specializing in React, TypeScript,
            Express, and MongoDB, on a mission to transform ideas into
            functional, user-centric web experiences, while gaining valuable
            industry insights as a Development Intern at Digital Web Solutions
            Pvt Ltd.
          </p>
        </div>
        <div className="skill-sets">
          <div className="skill">
            <a href="">
              <img src={ReactLogo} alt="React Logo" />
              React
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img className="JS-logo" src={JavaScriptLogo} alt="React Logo" />
              Express JS
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img className="react-logo" src={MongoDBLogo} alt="React Logo" />
              Mongo DB
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img className="react-logo" src={NodeJSLogo} alt="React Logo" />
              Node JS
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img className="react-logo" src={ApiLogo} alt="React Logo" />
              Rest API
            </a>
          </div>
        </div>
        <div className="skills-sets-row2">
          <div className="skill">
            <a href="">
              <img src={NPMLogo} alt="React Logo" />
              NPM
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img src={BootstrapLogo} alt="React Logo" />
              Bootstrap
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img src={PhpLogo} alt="React Logo" />
              PHP
            </a>
          </div>
          <div className="skill">
            <a href="">
              <img src={ReactLogo} alt="React Logo" />
              React
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
