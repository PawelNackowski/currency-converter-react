const Select = ({ currency }) => (
  <select className="form__field">
    {currency.map(task => (
      <option key={task.id}>{task.content}</option>
    ))}
  </select>
);

export default Select;