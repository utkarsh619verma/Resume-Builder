import { useState } from "react";
import EducationForm from "./FormPanel/educationForm";
import PersonalForm from "./FormPanel/personalForm";
import styles from "./resumePage.module.css";
import ResumePanel from "./ResumePanel/resumePanel";
import SidePanel from "./SidePanel/sidePanel";
import ExperienceForm from "./FormPanel/experienceForm";

export default function ResumePage() {
  const [activeForm, setActiveForm] = useState("personal");
  const formsArray = {
    personal: <PersonalForm />,
    educational: <EducationForm />,
    experience: <ExperienceForm />,
  };
  return (
    <div className={styles.resumePage}>
      <SidePanel setActiveForm={setActiveForm} />
      {formsArray[activeForm]}
      <ResumePanel />
    </div>
  );
}
