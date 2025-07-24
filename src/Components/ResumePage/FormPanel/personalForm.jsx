import classNames from "classnames";
import standardFormStyles from "./form.module.css";
export default function PersonalForm() {
  return (
    <div className={standardFormStyles.formContainer}>
      <h2 className={standardFormStyles.introHeading}>
        Begin with your personal details
      </h2>
      <p className={standardFormStyles.introPara}>
        Your name, city, and contact information. This forms the header section
        of your resume and helps recruiters contact you quickly
      </p>
      <form className={classNames(standardFormStyles.formGrid)} action="">
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="firstName"
            >
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
        </div>
        <div className={standardFormStyles.threeColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="city"
            >
              City
            </label>
            <input type="text" id="city" name="city" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="country"
            >
              Country
            </label>
            <input type="text" id="country" name="country" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="pincode"
            >
              Pin Code
            </label>
            <input type="number" id="pincode" name="pincode" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
        </div>
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="phone"
            >
              Phone
            </label>
            <input type="number" id="phone" name="phone" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="email"
            >
              Email
            </label>
            <input type="email" id="email" name="email" />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
        </div>
        <button className={standardFormStyles.saveButton} type="button">
          Save Details
        </button>
      </form>
    </div>
  );
}
