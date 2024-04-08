import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import CallIcon from "@mui/icons-material/Call";
import Resume from "../assets/Resume.pdf";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <section>
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="http://www.linkedin.com/in/salil-saurav/" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <span className="linkedin">Linkedin</span>
                    </li>
                    <li>
                        <a href="https://github.com/salil-saurav" target="_blank">
                            <GitHubIcon />
                        </a>
                        <span className="github">Github</span>
                    </li>
                    <li>
                        <a href={Resume} target="_blank">
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
        </section>
    );
};

export default Sidebar;
