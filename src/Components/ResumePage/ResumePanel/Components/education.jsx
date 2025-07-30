import { useSelector } from "react-redux";

export default function Education() {
  const { allEducations } = useSelector((state) => state.education);
  const { currentEducation } = useSelector((state) => state.education);
  return (
    <>
      {allEducations.map((element) => {
        return (
          <div>
            <p>{element.degree}</p>
            <p>{element.universityname}</p>
            <p>{element.marks}</p>
            <p>
              {element.from}-{element.to}
            </p>
          </div>
        );
      })}
      <p>{currentEducation.degree}</p>
      <p>{currentEducation.universityname}</p>
      <p>{currentEducation.marks}</p>
      <p>
        {currentEducation.from}{" "}
        {currentEducation.to != "" && <>- {currentEducation.to}</>}
      </p>
    </>
  );
}
