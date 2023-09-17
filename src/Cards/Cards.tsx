import "./Cards.css";
import Tilt from "react-parallax-tilt";
import NPMLogo from "../assets/Logo/npm.svg";

const Cards = () => {
  return (
    <>
      <div className="card-group-one">
        <Tilt tiltEnable={true}>
          <div className="card">
            <h1>Projects</h1>
            <img className="npmlogo" src={NPMLogo} alt="" />
          </div>
        </Tilt>
        <Tilt tiltEnable={true}>
          <div className="card"></div>
        </Tilt>
      </div>
      <div className="card-group-two">
        <Tilt tiltEnable={true}>
          <div className="card">card 3</div>
        </Tilt>
        <Tilt tiltEnable={true}>
          <div className="card">card 4</div>
        </Tilt>
      </div>
    </>
  );
};

export default Cards;
