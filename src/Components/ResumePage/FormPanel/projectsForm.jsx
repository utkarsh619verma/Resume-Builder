import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

export default function ProjectsForm() {
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Highlight Your Key Projects
      </h2>
      <p className={standardFormStyles.introPara}>
        Add projects that showcase your skills and expertise. Mention the
        technologies used, your role, and the key outcomes or achievements.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <div className={standardFormStyles.fieldContainer}>
          <label className={standardFormStyles.label} htmlFor="project_title">
            Project Title
          </label>
          <input id="project_title" name="project_title" type="text" />
          <span className={standardFormStyles.borderSpan}></span>
        </div>
        <div>
          <label
            className={standardFormStyles.label}
            htmlFor="project_description"
          >
            Project Description
          </label>
          <TextEditor
            placeholder={
              "Explain what the project does and your contributions. E.g., Built a weather app using React and improved API response time by 30%. Summarize the project, tools used, and achievements"
            }
          />
        </div>
        <button
          className={classNames(
            standardFormStyles.saveButton,
            "basicPurpleButton"
          )}
          type="button"
        >
          Save Details
        </button>
      </form>
    </div>
  );
}
