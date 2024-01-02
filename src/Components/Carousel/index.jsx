import ImageSlider from "../ImageSlider";
import '../../Styles/ImageSlider.css';
import JSON from "../../JSON/Pictures.json";


const App = () => {
  const slides = JSON;

  return (
    <div className="container">
      <div className="slider">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;