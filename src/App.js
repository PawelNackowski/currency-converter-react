import React, { useState } from "react"
import Legend from "./Legend";
import Container from "./Container";
import Section from "./Section";
import Select from "./Select";
import AmountInput from "./AmountInput";
import Result from "./Result"
import Information from "./Information";
import InformationInput from "./InformationInput";

function App() {
  const currencies = [
    { id: 1, name: "--wybierz walutę--", rate: 0.00 },
    { id: 2, name: "EURO", rate: 4.7199 },
    { id: 3, name: "USD", rate: 4.7477 },
    { id: 4, name: "CHF", rate: 4.7705 },
  ];

  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies[0].name);

  const isExchangeRate = currencies.find(({ name }) => currency === name).rate;

  return (

    < Container >
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title="Kalkulator walut" />
          <Section
            title="Waluta:"
            body={<Select currencies={currencies} setCurrency={setCurrency}
            />}
          />
          <Section
            title="Kwota:"
            body={<AmountInput amount={amount} setAmount={setAmount} />}
          />
          <Result
            AmountInput={AmountInput} amount={amount} isExchangeRate={isExchangeRate} />
          <Information
            input={<InformationInput isExchangeRate={isExchangeRate} />}
            text="*aktualny kurs walut na dzień 31.10.2022"
          />
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
