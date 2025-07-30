import standardFormStyles from "./form.module.css";
import TextEditor from "./textEditor";

//IMPORT REDUX RELATED STUFF
import { addAchievement, setDescription } from "../../../features/achievements";
import { useDispatch, useSelector } from "react-redux";
export default function AchievementsForm() {
  const dispatch = useDispatch();
  const { allAchievements, currentAchievement } = useSelector(
    (state) => state.achievements
  );
  const { description } = currentAchievement;
  const handleAchievementsSlice = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "achievement_description": {
        dispatch(setDescription(value));
        break;
      }
      default: {
        const newAchievement = { description };
        dispatch(addAchievement(newAchievement));
        break;
      }
    }
  };

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
          value={description}
          setValue={(val) => dispatch(setDescription(val))}
          name="achievement_description"
        />
        <button
          onClick={handleAchievementsSlice}
          className={standardFormStyles.saveButton}
          type="button"
        >
          Save Details
        </button>
        {allAchievements.length > 0 && <p>{allAchievements.length}</p>}
      </form>
    </div>
  );
}
