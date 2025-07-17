import { NavLink } from "react-router-dom";
import styles from "./templatePreview.module.css";
import { templateData } from "../templateData";

export default function Templatepreview({ index }) {
  const template = templateData[index];
  return (
    <div
      style={{
        padding: "calc(5px + 1.5625vw)",
        background: "#260445",
        color: "white",
      }}
    >
      <div className={styles.templatePreview}>
        <h1 className={styles.previewTitle}>{template.title}</h1>
        <img className={styles.previewImage} src={template.url} alt="" />
      </div>
      <p className={styles.previewAlert}>
        Note: You can change the font color, background color and font sizes of
        the template in the next step
      </p>

      <NavLink to="/template/build_resume" style={{ textDecoration: "none" }}>
        <button className={styles.previewStartButton}>Build resume </button>
      </NavLink>
    </div>
  );
}
