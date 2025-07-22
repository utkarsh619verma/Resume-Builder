import PersonalForm from "./FormPanel/personalForm";
import styles from "./resumePage.module.css";
import ResumePanel from "./ResumePanel/resumePanel";
import SidePanel from "./SidePanel/sidePanel";

export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <SidePanel />
      <PersonalForm />
      <ResumePanel />
    </div>
  );
}
