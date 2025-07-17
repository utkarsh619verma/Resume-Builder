import { useEffect, useState } from "react";
import { sliderImage } from "./sliderImage";
import SliderContent from "./sliderContent";
import style from "./carousel.module.css";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const arrayLength = sliderImage.length;
  useEffect(() => {
    let interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % arrayLength);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={style.sliderContainer}>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
    </div>
  );
}
