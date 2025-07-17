import style from "./Carousel/carousel.module.css";
import Slider from "./Carousel/slider";
export default function Middleportion() {
  return (
    <div className={style.middleContainer}>
      <Slider />
    </div>
  );
}
