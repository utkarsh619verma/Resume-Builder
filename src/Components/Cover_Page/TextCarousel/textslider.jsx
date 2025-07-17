import { useEffect, useState } from "react";
import { textData } from "./textData";
import TextSlide from "./textSlide";

export default function Textslider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = textData.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <TextSlide activeIndex={activeIndex} textdata={textData} />
    </>
  );
}
