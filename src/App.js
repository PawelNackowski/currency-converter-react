import { useState } from "react"
import Select from "./Select";
import AmountInput from "./AmountInput";
import Result from "./Result"
import Information from "./Information";
import InformationInput from "./InformationInput";

function App() {
  const currencies = [
    { id: 1, name: "--wybierz walutę--", rate: 0.00 },
    { id: 2, name: "EURO", rate: 4.6763 },
    { id: 3, name: "USD", rate: 4.4004 },
    { id: 4, name: "CHF", rate: 4.7531 },
  ];

  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies[0].name);

  const exchangeRate = currencies.find(({ name }) => currency === name).rate;

  return (
    <form>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut
        </legend>
        <label className="form__label">
          Waluta
        </label>
        <Select
          currencies={currencies}
          setCurrency={setCurrency}
        />
        <label className="form__label">
          Kwota
        </label>
        <AmountInput 
        amount={amount} 
        setAmount={setAmount} 
        />
        <Result
          AmountInput={AmountInput} amount={amount} exchangeRate={exchangeRate} />
        <Information
          input={<InformationInput exchangeRate={exchangeRate} />}
          text="*aktualny kurs walut na dzień 28.12.2022"
        />
      </fieldset>
    </form>
  );
}

export default App;
