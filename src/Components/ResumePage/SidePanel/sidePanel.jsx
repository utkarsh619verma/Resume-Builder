import styles from "./sidePanel.module.css";
export default function SidePanel() {
  return (
    <div className={styles.sidePanel}>
      <ul>
        <li>
          <img
            title="Personal"
            src="../public/FormSidePanel/icons8-personal-information-64.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Personal</p>
        </li>
        <li>
          <img
            title="Education"
            src="../public/FormSidePanel/icons8-education-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Education</p>
        </li>
        <li>
          <img
            title="Skills"
            src="../public/FormSidePanel/icons8-experience-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Experience</p>
        </li>
        <li>
          <img
            title="Experience"
            src="../public/FormSidePanel/icons8-skills-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Skills</p>
        </li>
        <li>
          <img
            title="Projects"
            src="../public/FormSidePanel/icons8-projects-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Projects</p>
        </li>
        <li>
          <img
            title="Achievements"
            src="../public/FormSidePanel/icons8-achievements-99.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Achievements</p>
        </li>
        <li>
          <img
            title="Additional Details"
            src="../public/FormSidePanel/icons8-more-details-50.png"
            alt=""
          />
          <p className={styles.fieldName}>Additional Details</p>
        </li>
      </ul>
    </div>
  );
}
