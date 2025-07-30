import { useSelector } from "react-redux";

function FirstName() {
  const { firstname } = useSelector((state) => state.personal);
  return <h1>{firstname}</h1>;
}

function LastName() {
  const { lastname } = useSelector((state) => state.personal);
  return <h1>{lastname}</h1>;
}

export default function Name() {
  return (
    <div>
      <FirstName />
      <LastName />
    </div>
  );
}
