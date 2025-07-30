import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

//IMPORTING REDUX RELATED  STUFF
import { useDispatch, useSelector } from "react-redux";
import {
  setJobTitle,
  setCompany,
  setDescription,
  setStartMonth,
  setStartYear,
  setEndMonth,
  setEndYear,
  setCity,
  setCountry,
  setNewExperience,
} from "../../../features/experienceSlice";

export default function ExperienceForm() {
  const {
    jobtitle,
    company,
    description,
    startmonth,
    startyear,
    endmonth,
    endyear,
    city,
    country,
  } = useSelector((state) => state.experience.newExperience);
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
  const dispatch = useDispatch();
  const handleExperienceSlice = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "job_title": {
        dispatch(setJobTitle(value));
        break;
      }
      case "employer": {
        dispatch(setCompany(value));
        break;
      }
      case "description": {
        dispatch(setDescription(value));
        break;
      }
      case "startyear": {
        dispatch(setStartYear(value));
        break;
      }
      case "startmonth": {
        dispatch(setStartMonth(value));
        break;
      }
      case "endyear": {
        dispatch(setEndYear(value));
        break;
      }
      case "endmonth": {
        dispatch(setEndMonth(value));
        break;
      }
      case "job_city": {
        dispatch(setCity(value));
        break;
      }
      case "job_country": {
        dispatch(setCountry(value));
        break;
      }
      default: {
        const newExperienceObject = {
          jobtitle,
          company,
          description,
          startmonth,
          startyear,
          endmonth,
          endyear,
          city,
          country,
        };
        dispatch(setNewExperience(newExperienceObject));
      }
    }
  };
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
            <input
              type="text"
              name="job_title"
              value={jobtitle}
              onChange={(e) => {
                handleExperienceSlice(e);
              }}
              id="job_title"
            />
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="employer">
              Employer/Company Name
            </label>
            <input
              type="text"
              name="employer"
              value={company}
              onChange={(e) => {
                handleExperienceSlice(e);
              }}
              id="employer"
            />
          </div>
        </div>
        <div style={{ maxHeight: "30rem", overflowY: "scroll" }}>
          <label className={standardFormStyles.label} htmlFor="job_description">
            Job Description
          </label>
          <TextEditor
            value={description}
            setValue={(val) => dispatch(setDescription(val))}
            name="description"
            placeholder={`Explain what you worked on, your main responsibilities, and any key achievements.Focus on results and specific contributions rather than just listing tasks.→ Developed and optimized a web application, improving load speed by 30% and enhancing user experience.`}
          />
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
              <select
                value={startmonth}
                name="startmonth"
                onChange={(e) => {
                  handleExperienceSlice(e);
                }}
                id="startmonth"
              >
                {months.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select
                value={startyear}
                name="startyear"
                onChange={(e) => {
                  handleExperienceSlice(e);
                }}
                id="startyear"
              >
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
              <select
                value={endmonth}
                name="endmonth"
                onChange={(e) => {
                  handleExperienceSlice(e);
                }}
                id="endmonth"
              >
                {months.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select
                value={endyear}
                name="endyear"
                onChange={(e) => {
                  handleExperienceSlice(e);
                }}
                id="endyear"
              >
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
            <input
              type="text"
              name="job_city"
              value={city}
              onChange={(e) => {
                handleExperienceSlice(e);
              }}
              id="job_city"
            />
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="job_country">
              Country
            </label>
            <input
              type="text"
              name="job_country"
              value={country}
              onChange={(e) => {
                handleExperienceSlice(e);
              }}
              id="job_country"
            />
          </div>
        </div>
        <button
          type="button"
          className={classNames(
            standardFormStyles.saveButton,
            "basicPurpleButton"
          )}
          onClick={handleExperienceSlice}
        >
          Save Details
        </button>
      </form>
    </div>
  );
}
