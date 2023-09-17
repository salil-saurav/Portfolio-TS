// Spinner.js
import "./Spinner.css"; // Create a CSS file for styling

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-circle"></div>
      <div className="loading-bar">
        <div className="loading-bar-fill"></div>
      </div>
    </div>
  );
};

export default Spinner;
