import styles from "./sidePanel.module.css";
export default function SidePanel({ setActiveForm }) {
  return (
    <div className={styles.sidePanel}>
      <ul>
        <li
          onClick={() => {
            setActiveForm("personal");
          }}
        >
          <img
            title="Personal"
            src="../FormSidePanel/icons8-personal-information-64.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Personal</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("educational");
          }}
        >
          <img
            title="Education"
            src="../FormSidePanel/icons8-education-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Education</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("experience");
          }}
        >
          <img
            title="Skills"
            src="../FormSidePanel/icons8-experience-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Experience</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("skills");
          }}
        >
          <img
            title="Experience"
            src="../FormSidePanel/icons8-skills-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Skills</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("projects");
          }}
        >
          <img
            title="Projects"
            src="../FormSidePanel/icons8-projects-50.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Projects</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("achievements");
          }}
        >
          <img
            title="Achievements"
            src="../FormSidePanel/icons8-achievements-99.png"
            alt=""
          />{" "}
          <p className={styles.fieldName}>Achievements</p>
        </li>
        <li
          onClick={() => {
            setActiveForm("summary");
          }}
        >
          <img
            title="Additional Details"
            src="../FormSidePanel/icons8-more-details-50.png"
            alt=""
          />
          <p className={styles.fieldName}>Summary</p>
        </li>
      </ul>
    </div>
  );
}
