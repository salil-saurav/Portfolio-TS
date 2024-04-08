import "./Banner.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import ReactLogo from "../assets/Logo/React.svg";
import JavaScriptLogo from "../assets/Logo/JS.svg";
import MongoDBLogo from "../assets/Logo/mongoDB.svg";
import NodeJSLogo from "../assets/Logo/Node.svg";
import ApiLogo from "../assets/Logo/API.svg";
import wordpreessLogo from "../assets/Logo/wordpress.webp";
import PhpLogo from "../assets/Logo/php.svg";
import BootstrapLogo from "../assets/Logo/Bootstrap.svg";
import TypeScriptLogo from "../assets/Logo/TS.svg";
import TailwindLogo from "../assets/Logo/tailwind.svg";

const Banner = () => {
    useEffect(() => {
        // Use JavaScript to trigger the animation only once
        const spans = document.querySelectorAll(".name-animation span");
        spans.forEach((span, index) => {
            (span as HTMLElement).style.animationDelay = `calc(0.1s * ${index})`;
            (span as HTMLElement).style.opacity = "1"; // Set opacity to '1' to make the spans visible
        });
    }, []);
    return (
        <div className="banner">
            <Container>
                <div className="banner-body">
                    <div className="name-animation">
                        <h1>
                            Hello I'am Salil Saurav
                        </h1>

                        <h2>
                            Junior Developer
                        </h2>
                    </div>
                    <p>
                        Dedicated Full-Stack Developer specializing in <b>React,
                            TypeScript, Express, Wordpress, PHP and MongoDB</b>, on a mission
                        to transform ideas into functional, user-centric web experiences,
                        while gaining valuable industry insights as a{" "}
                        <b>Junior Developer at Digital Web Solutions Pvt Ltd</b>.
                    </p>

                    <h2 className="arsenal">Web Development Arsenal</h2>
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
                        <a href="https://www.php.net/" target="_blank">
                            <img className="language-logo" src={PhpLogo} alt="PHP Logo" />
                            PHP
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
                    <div className="skill">
                        <a href="https://wordpress.com/" target="_blank">
                            <img className="language-logo wordpress" src={wordpreessLogo} alt="wordpress Logo" />
                            Wordpress
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://getbootstrap.com/" target="_blank">
                            <img
                                className="language-logo"
                                src={BootstrapLogo}
                                alt="Bootstrap Logo"
                            />
                            Bootstrap
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://tailwindcss.com/" target="_blank">
                            <img
                                className="language-logo tailwind"
                                src={TailwindLogo}
                                alt="Tailwind Logo"
                            />
                            Tailwind CSS
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
