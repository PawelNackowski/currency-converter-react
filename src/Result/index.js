const Result = ({ amount, exchangeRate }) => {
  const getResult = amount * exchangeRate;
  return (
    <p>
      <span className="form__valuePosition">
        Kwota w PLN : <strong>{getResult.toFixed(2)}</strong>
      </span>
    </p>
  )
};

export default Result;