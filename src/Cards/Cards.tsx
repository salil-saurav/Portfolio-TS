import "./Cards.css";
import Tilt from "react-parallax-tilt";
import campImage from "../assets/images/campsite.png";
import cardImageTwo from "../assets/images/PerfectDry.png";
import cardImageThree from "../assets/images/thecrew.png";
import cardFourImage from "../assets/images/livesearch.png";

const Cards = () => {
  return (
    <>
      <div className="card-group-one">
        <Tilt tiltEnable={true}>
          <div className="card">
            <div className="cardOne">
              <a href="https://campsite-mym1.onrender.com" target="_blank">
                <img className="cardImage" src={campImage} alt="campImage" />
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt tiltEnable={true}>
          <div className="card">
            <div className="cardTwo">
              <a href="https://rad-strudel-251366.netlify.app" target="_blank">
                <img
                  className="cardImage"
                  src={cardImageTwo}
                  alt="Card Two Image"
                />
              </a>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="card-group-two">
        <Tilt tiltEnable={true}>
          <div className="card">
            {" "}
            <div className="cardThree">
              <a href="https://mellow-dodol-8c8c4d.netlify.app" target="_blank">
                <img
                  className="cardImage"
                  src={cardImageThree}
                  alt="Card Three Image"
                />
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt tiltEnable={true}>
          <div className="card">
            {" "}
            <div className="cardFour">
              <a href="https://deluxe-froyo-e9d9c8.netlify.app" target="_blank">
                <img
                  className="cardImage"
                  src={cardFourImage}
                  alt="Card Four Image"
                />
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Cards;
