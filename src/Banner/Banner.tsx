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
import TypeScriptLogo from "../assets/Logo/TS.svg";

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
            <a href="https://react.dev/" target="_blank">
              <img className="language-logo" src={ReactLogo} alt="React Logo" />
              React
            </a>
          </div>
          <div className="skill">
            <a href="https://www.typescriptlang.org/" target="_blank">
              <img
                className="language-logo TSLogo"
                src={TypeScriptLogo}
                alt="TS Logo"
              />
              TypeScript
            </a>
          </div>
          <div className="skill">
            <a href="https://expressjs.com/" target="_blank">
              <img
                className="language-logo JS"
                src={JavaScriptLogo}
                alt="ExpressJS Logo"
              />
              Express JS
            </a>
          </div>
          <div className="skill">
            <a href="https://www.mongodb.com/" target="_blank">
              <img
                className="language-logo"
                src={MongoDBLogo}
                alt="MongoDB Logo"
              />
              Mongo DB
            </a>
          </div>
          <div className="skill">
            <a href="https://nodejs.org/en" target="_blank">
              <img
                className="language-logo"
                src={NodeJSLogo}
                alt="NodeJS Logo"
              />
              Node JS
            </a>
          </div>
          <div className="skill">
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/REST"
              target="_blank"
            >
              <img
                className="language-logo rest-logo"
                src={ApiLogo}
                alt="Rest API Logo"
              />
              Rest API
            </a>
          </div>
        </div>
        <div className="skills-sets-row2">
          <div className="skill">
            <a href="https://www.npmjs.com/" target="_blank">
              <img src={NPMLogo} alt="React Logo" />
              NPM
            </a>
          </div>
          <div className="skill">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={BootstrapLogo} alt="Bootstrap Logo" />
              Bootstrap
            </a>
          </div>
          <div className="skill">
            <a href="https://www.php.net/" target="_blank">
              <img src={PhpLogo} alt="PHP Logo" />
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
