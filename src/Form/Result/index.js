import { Value, Input } from "./styled";

const Result = ({ amount, getRate, setAmount }) => {
  const getResult = amount * getRate;

  return (
    <>
      <Input
        type="number"
        value={amount}
        autoFocus
        onChange={({ target }) => setAmount(target.value)}
        min="1"
      />
      <Value>
        Kwota w PLN : <strong>{getResult.toFixed(2)}</strong>
      </Value>
    </>
  )
};

export default Result;