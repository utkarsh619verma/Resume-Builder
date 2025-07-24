import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import { useState } from "react";
export default function EducationForm() {
  const [additionalSectionVisibility, showAdditionalSection] = useState(false);
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Build your education section
      </h2>
      <p className={standardFormStyles.introPara}>
        Include your degrees, institutions, and years of study. A clear
        education section shows recruiters your academic achievements and
        relevant qualifications.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={standardFormStyles.label}
              htmlFor="universityName"
            >
              University/College Name
            </label>
            <input type="text" id="universityName" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>

          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="degree">
              Degree
            </label>
            <input type="text" name="" id="degree" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
        </div>

        <div className={standardFormStyles.threeColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="marks">
              Marks
            </label>
            <input type="number" name="" id="" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>

          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="from">
              From
            </label>
            <select name="from" id="from">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="to">
              To
            </label>
            <select name="to" id="to">
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>
        </div>
        <div>
          <p
            className={standardFormStyles.moreDetailsHeading}
            onClick={() => {
              showAdditionalSection(!additionalSectionVisibility);
            }}
          >
            Add more details related to this education
          </p>
          {additionalSectionVisibility && (
            <div
              className={classNames(
                standardFormStyles.threeColumnGridField,
                standardFormStyles.additionalDetailsSection
              )}
            >
              <div>
                <label className={standardFormStyles.label} htmlFor="title">
                  Title
                </label>
                <input type="text" id="title" />
              </div>
              <div>
                <label
                  className={standardFormStyles.label}
                  htmlFor="more_details_content"
                >
                  Content
                </label>
                <input type="text" id="more_details_content" />
              </div>
              <button
                className={classNames(
                  "basicPurpleButton",
                  standardFormStyles.addButton
                )}
                type="button"
              >
                Add
              </button>
              <p className={standardFormStyles.examplePara}>
                Add any extra details about this education, such as class
                achievements, awards, or notable ranks in competitive exams.
                These highlights can make your academic profile stand out.
              </p>
            </div>
          )}
        </div>
        <button className={standardFormStyles.saveButton}>Add Education</button>
      </form>
    </div>
  );
}
