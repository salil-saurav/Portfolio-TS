import "./Cards.css";
import Tilt from "react-parallax-tilt";

const Cards = () => {
  return (
    <>
      <div className="card-group-one">
        <Tilt tiltEnable={true}>
          <div className="card">
            <h1>Card1</h1>
          </div>
        </Tilt>
        <Tilt tiltEnable={true}>
          <div className="card">card 2</div>
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
