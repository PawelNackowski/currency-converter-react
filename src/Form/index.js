import { useState, } from "react";
import Select from "./Select";
import Result from "./Result";
import Clock from "./Clock";
import { Fieldset, Legend, Label, Rate, Information } from "./styled"
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("EUR");

  const ratesData = useRatesData();

  const setRate = () => {
    const rate = ratesData.rates[currency];
  if (ratesData.state === "success") {
    return 1/rate;
    };
  };

  return (
    <form>
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <Clock />
        {ratesData.state === "loading"
          ? (
            <p>
              Trwa ładowanie kursów walut...
            </p>
          )
          : (
            ratesData.state === "error" ? (
              <p>
                Nastąpił błąd przy pobieraniu danych...
              </p>
            ) : (
              <>
                <Label>Waluta</Label>
                <Select
                  ratesData={ratesData}
                  currency={currency}
                  setCurrency={setCurrency}
                />
                <Label>Kwota</Label>
                <Result
                  amount={amount}
                  // exchangeRate={exchangeRate}
                  setAmount={setAmount}
                />
                <Rate>
                  {setRate().toFixed(3)}*
                </Rate>
                <Information>
                  *aktualny kurs walut na dzień 28.12.2022
                </Information>
              </>
            ))}
      </Fieldset>
    </form>
  )
};

export default Form;