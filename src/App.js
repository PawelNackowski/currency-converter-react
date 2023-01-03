import { useState } from "react";
import Select from "./Select";
import Result from "./Result";
import Clock from "./Clock";

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
    <Clock  />
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
        <Result
          amount={amount}
          exchangeRate={exchangeRate}
          setAmount={setAmount}
        />
        <p>
          <input
            className="form__fieldInformation"
            name="sume"
            value={exchangeRate}
            readOnly />*
        </p>
        <div className="form__textInformation">
          *aktualny kurs walut na dzień 28.12.2022
        </div>
      </fieldset>
    </form>
  );
}

export default App;
