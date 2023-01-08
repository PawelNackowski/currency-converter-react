import { Value, Input } from "./styled";

const Result = ({ amount, exchangeRate, setAmount }) => {
  const getResult = amount * exchangeRate;

  return (
    <>
      <Input
        type="number"
        value={amount}
        autoFocus
        onChange={({ target }) => setAmount(target.value)}
        min="1" />
      <p>
        <Value>
          Kwota w PLN : <strong>{getResult.toFixed(2)}</strong>
        </Value>
      </p>
    </>
  )
};

export default Result;