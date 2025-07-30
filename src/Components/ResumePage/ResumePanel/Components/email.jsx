import { useSelector } from "react-redux";

export default function Email() {
  const { email } = useSelector((state) => state.personal);
  return <p>{email}</p>;
}
