import useCurrentDate from "./useCurrentData";
import "./style.css";

const Clock = () => {
  const currentDate = useCurrentDate();

  const formattedDate = currentDate.toLocaleDateString
  (undefined,
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    }
  );

  return (
    <p className="clock">
      Dziś jest: {formattedDate}
    </p>
  )
};

export default Clock;