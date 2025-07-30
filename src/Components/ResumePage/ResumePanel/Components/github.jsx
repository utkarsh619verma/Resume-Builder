import { useSelector } from "react-redux";

export default function Github() {
  const { github } = useSelector((state) => state.personal);
  return <p>{github}</p>;
}
