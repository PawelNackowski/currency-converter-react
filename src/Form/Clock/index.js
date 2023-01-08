import "./style.css";
import { useCurrentDate } from "./useCurrentDate";
import { useFormatedDate } from "./useFormatedDate";

const Clock = () => {
  const date = useCurrentDate();
  const formatedDate = useFormatedDate();

  return (
    <div className="clock">
      Dziś jest
      {" "}
      {formatedDate(date)}
    </div>
  )
};

export default Clock;