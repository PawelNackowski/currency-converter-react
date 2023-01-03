const Select = ({ currencies, currency, setCurrency }) => (
  <select
    className="form__field"
    value={currency}
    onChange={({ target }) => setCurrency(target.value)}
  >
    {currencies.map(currency => (
      <option
        key={currency.id}
        value={currency.name}
      >
        {currency.name}
      </option>
    ))}
  </select>
);

export default Select;