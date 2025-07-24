import classNames from "classnames";
import standardFormStyles from "./form.module.css";

export default function SkillsForm() {
  const suggestedSkillsArray = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "Flask",
    "Data Analysis",
    "Java",
    "Spring Boot",
    "C++",
    "C",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Responsive Design",
    "Git",
    "GitHub",
    "RESTful API Development",
    "AWS",
    "Azure",
    "Google Cloud Platform (GCP)",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "TensorFlow",
    "Scikit-learn",
    "Data Structures",
    "Algorithms",
  ];
  const userSkills = [
    "Git",
    "GitHub",
    "RESTful API Development",
    "AWS",
    "Azure",
    "Google Cloud Platform (GCP)",
    "Docker",
    "Kubernetes",
    "Machine Learning",
  ];
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Showcase Your Key Skills
      </h2>
      <p className={standardFormStyles.introPara}>
        List down the technical and soft skills that best highlight your
        expertise. Focus on skills that are relevant to your desired job role,
        such as programming languages, tools, or interpersonal strengths. Be
        specific and keep them concise to make your resume impactful.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="skills">
              Skills
            </label>
            <input
              placeholder="Add your skills"
              name="skills"
              id="skills"
              type="text"
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <button
            className={classNames(
              standardFormStyles.addButton,
              "basicPurpleButton"
            )}
            type="button"
          >
            Add
          </button>
        </div>
        <div>
          <p
            style={{
              color: "rgb(85, 27, 139)",
              fontWeight: "600",
              fontSize: "1.6rem",
            }}
          >
            Popular skills that fit your targeted position, click to add{" "}
          </p>
          <div className={standardFormStyles.suggestedSkillsBox}>
            {suggestedSkillsArray.map((skill, index) => {
              return (
                <span className={standardFormStyles.skillsPill} key={index}>
                  {skill}
                </span>
              );
            })}
          </div>
          <div>
            <p
              style={{
                color: "rgb(85, 27, 139)",
                fontWeight: "600",
                fontSize: "1.6rem",
              }}
            >
              Your skills: {userSkills.length}
            </p>{" "}
            <div className={standardFormStyles.yourSkillsBox}>
              <ul>
                {userSkills.map((skill, index) => {
                  return (
                    <li>
                      <span key={index}>{skill}</span>
                      <button
                        type="button"
                        className={standardFormStyles.skillRemoveButton}
                      >
                        &#10006;
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
