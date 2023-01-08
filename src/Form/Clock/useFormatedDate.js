export const useFormatedDate = () => {
  const formatedDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  return formatedDate;
};