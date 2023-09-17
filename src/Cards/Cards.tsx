import "./Cards.css";
import Tilt from "react-parallax-tilt";

const Cards = () => {
  return (
    <>
      <div className="card-group-one">
        <Tilt tiltEnable={true}>
          <div className="card">
            <h2>Projects</h2>
            <p>https://campsite-depn.onrender.com</p>
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
