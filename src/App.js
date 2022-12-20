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
  const [currency, setCurrency] = useState([
    { id: 1, content: "--wybierz walutę--", value: "0.00" },
    { id: 2, content: "EURO", value: "4.7199" },
    { id: 3, content: "USD", value: "4.7477" },
    { id: 4, content: "CHF", value: "4.7705" },
  ]);

  return (

    < Container >
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title="Kalkulator walut" />
          <Section
            title="Waluta:"
            body={<Select
              currency={currency}
            />}
          />
          <Section
            title="Kwota:"
            body={<AmountInput />}
          />
          <Result />
          <Information
            input={<InformationInput />}
            text="*aktualny kurs walut na dzień 31.10.2022"
          />
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
