const AmountInput = ({ amount, setAmount }) => (
    <input
        className="form__field"
        type="number"
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        min="1"
    />
);

export default AmountInput;