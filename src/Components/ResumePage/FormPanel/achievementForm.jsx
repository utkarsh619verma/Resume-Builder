import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

export default function AchievementsForm() {
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Showcase Your Achievements
      </h2>
      <p className={standardFormStyles.introPara}>
        List accomplishments that highlight your expertise and add value to your
        profile. Focus on measurable results, awards, or recognitions that set
        you apart from others.
      </p>
      <form className={standardFormStyles.formGrid} action="">
        <TextEditor
          placeholder={
            "E.g., Awarded 'Best Intern of the Year' for optimizing backend APIs, reducing response time by 40%."
          }
        />
        <button className={standardFormStyles.saveButton} type="button">
          Preview Resume
        </button>
      </form>
    </div>
  );
}
