import { StyledSelect } from "./styled"

const Select = ({ currencies, currency, setCurrency }) => (
  <StyledSelect
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
  </StyledSelect>
);

export default Select;