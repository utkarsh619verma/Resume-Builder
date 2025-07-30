import { useSelector } from "react-redux";
export default function Linkedin() {
  const { linkedin } = useSelector((state) => state.personal);
  return <p>{linkedin}</p>;
}
