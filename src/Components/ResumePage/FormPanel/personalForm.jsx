import classNames from "classnames";
import styles from "./form.module.css";
export default function PersonalForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.introHeading}>Begin with your personal details</h2>
      <p className={styles.introPara}>
        Your name, city, and contact information. This forms the header section
        of your resume and helps recruiters contact you quickly
      </p>
      <form className={classNames(styles.formGrid)} action="">
        <div className={styles.namefield}>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" />
            <span className={styles.borderSpan}></span>
          </div>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" />
            <span className={styles.borderSpan}></span>
          </div>
        </div>
        <div className={styles.locationfield}>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="city">
              City
            </label>
            <input type="text" id="city" name="city" />
            <span className={styles.borderSpan}></span>
          </div>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="country">
              Country
            </label>
            <input type="text" id="country" name="country" />
            <span className={styles.borderSpan}></span>
          </div>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="pincode">
              Pin Code
            </label>
            <input type="text" id="pincode" name="pincode" />
            <span className={styles.borderSpan}></span>
          </div>
        </div>
        <div className={styles.contactfield}>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="phone">
              Phone
            </label>
            <input type="text" id="phone" name="phone" />
            <span className={styles.borderSpan}></span>
          </div>
          <div className={styles.fieldContainer}>
            <label className={classNames(styles.label)} htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" />
            <span className={styles.borderSpan}></span>
          </div>
        </div>
        <button className={styles.saveButton} type="button">
          Save Details
        </button>
      </form>
    </div>
  );
}
