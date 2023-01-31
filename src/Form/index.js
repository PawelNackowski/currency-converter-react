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

  const getRate = () => {
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
                  {getRate().toFixed(3)}*
                </Rate>
                <Information>
                    *Kursy walutu pobrane z Europejskiego Banku Centralnego
                </Information>
              </>
            ))}
      </Fieldset>
    </form>
  )
};

export default Form;