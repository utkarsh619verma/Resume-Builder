import classNames from "classnames";
import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

export default function SummaryForm() {
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Craft Your Professional Summary
      </h2>
      <p className={standardFormStyles.introPara}>
        Write a brief overview that highlights your key skills, experience, and
        career goals. Keep it concise and focused, giving employers a quick
        insight into who you are and what you bring to the table.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <div>
          <label className={standardFormStyles.label} htmlFor="summary">
            Summary
          </label>
          <TextEditor
            placeholder={
              "A concise 2-3 line overview of your skills, experience, and career goals. Example: 'Experienced frontend developer skilled in React and JavaScript, passionate about building user-friendly web applications'"
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
        </button>{" "}
      </form>
    </div>
  );
}
