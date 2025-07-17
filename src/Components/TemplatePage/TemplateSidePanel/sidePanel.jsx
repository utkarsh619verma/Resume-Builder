import { templateData } from "../templateData";
import styles from "./sidePanel.module.css";

export default function Sidepanel({ setIndex }) {
  return (
    <div className={styles.sidePanel}>
      <h1 className={styles.sidePanelHeading}>Choose Your Template</h1>
      {templateData.map((template, index) => {
        return (
          <div
            onClick={() => setIndex(index)}
            key={index}
            className={styles.template}
          >
            <img className={styles.templateImage} src={template.url} alt="" />
            <p className={styles.templateTitle}>{template.title}</p>
          </div>
        );
      })}
    </div>
  );
}
