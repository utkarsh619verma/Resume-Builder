import Education from "../../Components/education";
import Email from "../../Components/email";
import Github from "../../Components/github";
import Linkedin from "../../Components/linkedin";
import Name from "../../Components/Name";
import Phone from "../../Components/phone";
import Position from "../../Components/position";

export default function CleanCorporate() {
  return (
    <div>
      <Name />
      <Position />
      <div>
        <h3>CONTACT</h3>
        <Email />
        <Phone />
        <Linkedin />
        <Github />
      </div>
      <div>
        <h3>Education</h3>
        <Education />
      </div>
    </div>
  );
}
