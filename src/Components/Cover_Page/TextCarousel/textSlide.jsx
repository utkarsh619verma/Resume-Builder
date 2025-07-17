import styles from "./textslider.module.css";

export default function TextSlide({ activeIndex, textdata }) {
  return (
    <section className={styles.section}>
      {textdata.map((text, index) => {
        return (
          <p
            key={index}
            className={index == activeIndex ? styles.active : styles.inactive}
          >
            {text}
          </p>
        );
      })}
    </section>
  );
}
