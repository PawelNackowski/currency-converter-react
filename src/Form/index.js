import { useState } from "react";
import Select from "./Select";
import Result from "./Result";
import Clock from "./Clock";
import { Fieldset, Legend, Label, Rate, Information } from "./styled"

const currencies = [
  { id: 1, name: "--wybierz walutę--", rate: 0.00 },
  { id: 2, name: "EURO", rate: 4.6763 },
  { id: 3, name: "USD", rate: 4.4004 },
  { id: 4, name: "CHF", rate: 4.7531 },
];

const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies[0].name);

  const exchangeRate = currencies.find(({ name }) => currency === name).rate;
  return (
    <form>
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <Clock />
        <Label>Waluta</Label>
        <Select
          currencies={currencies}
          setCurrency={setCurrency}
        />
        <Label>Kwota</Label>
        <Result
          amount={amount}
          exchangeRate={exchangeRate}
          setAmount={setAmount}
        />
        <Rate>
          {exchangeRate}*
        </Rate>
        <Information>
          *aktualny kurs walut na dzień 28.12.2022
        </Information>
      </Fieldset>
    </form>
  )
};

export default Form;