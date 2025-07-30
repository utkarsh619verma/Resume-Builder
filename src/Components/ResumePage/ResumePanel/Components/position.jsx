import { useSelector } from "react-redux";

export default function Position() {
  const { position } = useSelector((state) => state.personal);
  return <p>{position}</p>;
}
