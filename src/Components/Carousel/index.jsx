import ImageSlider from "../ImageSlider/index.jsx";
import '../../Styles/ImageSlider.css';
import JSON from "../../JSON/Pictures.json";
//import {data} from "../../Data/index.js";


const Carousel = () => {
  const slides = JSON;

  return (
    <div className="container">
      <div className="slider">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Carousel;