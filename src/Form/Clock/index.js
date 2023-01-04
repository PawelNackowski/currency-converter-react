import { useState, useEffect } from "react";
import "./style.css";

const formatedDate = (date) => date.toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      Dziś jest
      {" "}
      {formatedDate(date)}
    </div>
  )
};

export default Clock;