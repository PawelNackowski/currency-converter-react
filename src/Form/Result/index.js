const Result = ({ amount, exchangeRate, setAmount }) => {
  const getResult = amount * exchangeRate;

  return (
    <>
      <input
        className="form__field"
        type="number"
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        min="1" />
      <p>
        <span className="form__valuePosition">
          Kwota w PLN : <strong>{getResult.toFixed(2)}</strong>
        </span>
      </p>
    </>
  )
};

export default Result;


// .form__valuePosition {
//   display: flex;
//   justify - content: flex - end;
// }