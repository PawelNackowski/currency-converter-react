const InformationInput = ({ isExchangeRate }) => (
  <p>
    <input
      className="form__fieldInformation"
      name="sume"
      value={isExchangeRate}
      readOnly
    />*
  </p>
);

export default InformationInput