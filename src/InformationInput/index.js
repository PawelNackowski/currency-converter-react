const InformationInput = ({ exchangeRate }) => (
  <p>
    <input
      className="form__fieldInformation"
      name="sume"
      value={exchangeRate}
      readOnly
    />*
  </p>
);

export default InformationInput