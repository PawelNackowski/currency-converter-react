import { useCurrentDate } from "./useCurrentDate";
import { useFormatedDate } from "./useFormatedDate";
import { StyledClock } from "./styled";

const Clock = () => {
  const date = useCurrentDate();
  const formatedDate = useFormatedDate();

  return (
    <StyledClock>
      Dziś jest
      {" "}
      {formatedDate(date)}
    </StyledClock>
  )
};

export default Clock;