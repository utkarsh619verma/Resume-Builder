import { useState } from "react";
import EducationForm from "./FormPanel/educationForm";
import PersonalForm from "./FormPanel/personalForm";
import styles from "./resumePage.module.css";
import ResumePanel from "./ResumePanel/resumePanel";
import SidePanel from "./SidePanel/sidePanel";
import ExperienceForm from "./FormPanel/experienceForm";
import SkillsForm from "./FormPanel/skillsForm";
import ProjectsForm from "./FormPanel/projectsForm";
import SummaryForm from "./FormPanel/summaryForm";
import AchievementsForm from "./FormPanel/achievementForm";

export default function ResumePage() {
  const [activeForm, setActiveForm] = useState("personal");
  const formsArray = {
    personal: <PersonalForm />,
    educational: <EducationForm />,
    experience: <ExperienceForm />,
    skills: <SkillsForm />,
    projects: <ProjectsForm />,
    summary: <SummaryForm />,
    achievements: <AchievementsForm />,
  };
  return (
    <div className={styles.resumePage}>
      <SidePanel setActiveForm={setActiveForm} />
      {formsArray[activeForm]}
      <ResumePanel />
    </div>
  );
}
