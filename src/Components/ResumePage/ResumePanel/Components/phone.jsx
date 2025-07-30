import { useSelector } from "react-redux";

export default function Phone() {
  const { phone } = useSelector((state) => state.personal);
  return <p>{phone}</p>;
}
