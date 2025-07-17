import styles from "./carousel.module.css";

export default function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeIndex ? styles.active : styles.inactive}
          >
            <img src={slide.url} className={styles.slideImage} alt="" />
            <div>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <h3 className={styles.slideText}>{slide.description}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}
