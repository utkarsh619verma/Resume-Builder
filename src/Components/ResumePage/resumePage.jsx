import styles from "./resumePage.module.css";

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <div className={styles.formPanel}>
        <h1 className={styles.formHeading}>Fill your Details</h1>
      </div>
      <div className={styles.resumePanel}></div>
    </div>
  );
}
