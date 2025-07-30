import classNames from "classnames";
import standardFormStyles from "./form.module.css";

//IMPORTING REDUX ACTIONS FROM PERSONAL SLICE AND RELATED STUFF
import {
  setFirstName,
  setLastName,
  setCity,
  setCountry,
  setEmail,
  setPhone,
  setPincode,
  setPosition,
  setLinkedin,
  setGithub,
} from "../../../features/personalSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalForm() {
  const {
    firstname,
    lastname,
    city,
    country,
    pincode,
    phone,
    email,
    position,
    linkedin,
    github,
  } = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const handlePersonalSlice = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName": {
        dispatch(setFirstName(value));
        break;
      }
      case "lastName": {
        dispatch(setLastName(value));
        break;
      }
      case "city": {
        dispatch(setCity(value));
        break;
      }
      case "country": {
        dispatch(setCountry(value));
        break;
      }
      case "pincode": {
        dispatch(setPincode(value));
        break;
      }
      case "phone": {
        dispatch(setPhone(value));
        break;
      }
      case "email": {
        dispatch(setEmail(value));
        break;
      }
      case "position": {
        dispatch(setPosition(value));
        break;
      }
      case "linkedin": {
        dispatch(setLinkedin(value));
        break;
      }
      case "github": {
        dispatch(setGithub(value));
        break;
      }
    }
  };

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
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstname}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastname}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="lastName"
            />
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
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="city"
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="country"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="country"
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="pincode"
            >
              Pin Code
            </label>
            <input
              type="number"
              id="pincode"
              value={pincode}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="pincode"
            />
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
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="phone"
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label
              className={classNames(standardFormStyles.label)}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
              name="email"
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
        </div>
        <div className={standardFormStyles.fieldContainer}>
          <label className={standardFormStyles.label} htmlFor="position">
            Position applying for
          </label>
          <input
            style={{ width: "95%" }}
            type="text"
            name="position"
            id="position"
            value={position}
            onChange={(e) => {
              handlePersonalSlice(e);
            }}
          />
          <span className={standardFormStyles.borderSpan}></span>
        </div>
        <div className={standardFormStyles.twoColumnGridField}>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={linkedin}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
            />
            <span className={standardFormStyles.borderSpan}></span>
          </div>
          <div className={standardFormStyles.fieldContainer}>
            <label className={standardFormStyles.label} htmlFor="linkedin">
              Github
            </label>
            <input
              type="text"
              name="github"
              id="github"
              value={github}
              onChange={(e) => {
                handlePersonalSlice(e);
              }}
            />
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
