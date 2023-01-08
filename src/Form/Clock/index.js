import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const formatedDate = (date) => date.toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

const Clock = () => {
  const date = useCurrentDate();

  return (
    <div className="clock">
      Dziś jest
      {" "}
      {formatedDate(date)}
    </div>
  )
};

export default Clock;