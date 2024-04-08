import "./Cards.css";
import Tilt from "react-parallax-tilt";
import campImage from "../assets/images/campsite.png";
import cardImageTwo from "../assets/images/PerfectDry.png";
import cardImageThree from "../assets/images/thecrew.png";
// import cardFourImage from "../assets/images/livesearch.png";
import dibalichImage from "../assets/images/dibalich.png";

const Cards: React.FC = () => {
    return (
        <section className="cardSection">
            <h2>What I've Built</h2>

            <div className="cards">
                <div className="card-group-one">
                    <Tilt tiltEnable={true}>
                        <div className="card">
                            <a href="https://campsite-mym1.onrender.com" target="_blank">
                                <img className="cardImage" src={campImage} alt="campImage" />
                            </a>
                            <span className="project-name">Camp Site</span>
                        </div>
                    </Tilt>
                    <Tilt tiltEnable={true}>
                        <div className="card">
                            <a href="https://rad-strudel-251366.netlify.app" target="_blank">
                                <img
                                    className="cardImage"
                                    src={cardImageTwo}
                                    alt="Card Two Image"
                                />
                            </a>
                            <span className="project-name">Perfect Dry</span>
                        </div>
                    </Tilt>
                </div>
                <div className="card-group-two">
                    <Tilt tiltEnable={true}>
                        <div className="card">
                            {" "}
                            <a href="https://mellow-dodol-8c8c4d.netlify.app" target="_blank">
                                <img
                                    className="cardImage"
                                    src={cardImageThree}
                                    alt="Card Three Image"
                                />
                            </a>
                            <span className="project-name">The Crew</span>
                        </div>
                    </Tilt>
                    <Tilt tiltEnable={true}>
                        <div className="card">
                            {" "}
                            <a
                                className="project-link"
                                href="https://dibalich.co.nz/"
                                target="_blank"
                            >
                                <img
                                    className="cardImage"
                                    src={dibalichImage}
                                    alt="Card Four Image"
                                />
                            </a>
                            <span className="project-name">Dibalich</span>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default Cards;
