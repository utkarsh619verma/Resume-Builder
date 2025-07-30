import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

//IMPORTING REDUX RELATED STUFF

import {
  setTitle,
  setDescription,
  addProject,
} from "../../../features/projectsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProjectsForm() {
  const dispatch = useDispatch();
  const { title, description } = useSelector(
    (state) => state.projects.currentProject
  );
  const { allProjects } = useSelector((state) => state.projects);

  const handleProjectsSlice = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "project_title": {
        dispatch(setTitle(value));
        break;
      }
      case "project_description": {
        dispatch(setDescription(value));
        break;
      }
      default: {
        const newProject = { title, description };
        dispatch(addProject(newProject));
        break;
      }
    }
  };

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
          <input
            id="project_title"
            value={title}
            name="project_title"
            onChange={(e) => {
              handleProjectsSlice(e);
            }}
            type="text"
          />
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
            value={description}
            setValue={(val) => dispatch(setDescription(val))}
            name="project_description"
          />
        </div>
        <button
          className={classNames(
            standardFormStyles.saveButton,
            "basicPurpleButton"
          )}
          type="button"
          onClick={handleProjectsSlice}
        >
          Save Details
        </button>
        {allProjects.length > 0 && <p>{allProjects.length}</p>}
      </form>
    </div>
  );
}
