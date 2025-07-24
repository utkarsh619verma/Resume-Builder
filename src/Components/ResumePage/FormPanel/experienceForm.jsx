import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

export default function ExperienceForm() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1980 + 1 },
    (_, i) => 1980 + i
  );
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Add your work and internship experience
      </h2>
      <p className={standardFormStyles.introPara}>
        List your past and current job roles or internships. Include your
        position, company name, and key responsibilities to showcase your
        professional experience and career growth.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="job_title">
              Job Title
            </label>
            <input type="text" name="job_title" id="job_title" />
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="employer">
              Employer/Company Name
            </label>
            <input type="text" name="employer" id="employer" />
          </div>
        </div>
        <div style={{ maxHeight: "30rem", overflowY: "scroll" }}>
          <label className={standardFormStyles.label} htmlFor="job_description">
            Job Description
          </label>
          <TextEditor />
        </div>
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={standardFormStyles.label}
              htmlFor="job_start_date"
            >
              Start Date
            </label>
            {/* <input type="text" name="job_start_date" id="job_start_date" /> */}
            <div className={standardFormStyles.twoColumnGridField}>
              <select name="from" id="from">
                {months.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select name="from" id="from">
                {years.map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="job_end_date">
              End Date
            </label>
            {/* <input type="text" name="job_end_date" id="job_end_date" /> */}
            <div className={standardFormStyles.twoColumnGridField}>
              <select name="from" id="from">
                {months.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select name="from" id="from">
                <option value="present">Present</option>
                {years.map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="job_city">
              City
            </label>
            <input type="text" name="job_city" id="job_city" />
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="job_country">
              Country
            </label>
            <input type="text" name="job_country" id="job_country" />
          </div>
        </div>
        <button
          type="button"
          className={classNames(
            standardFormStyles.saveButton,
            "basicPurpleButton"
          )}
        >
          Save Details
        </button>
      </form>
    </div>
  );
}
