import { useState, } from "react";
import Select from "./Select";
import Result from "./Result";
import Clock from "./Clock";
import Spinner from "./spiner";
import { Fieldset, Legend, Label, Rate, Information } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("EUR");

  const ratesData = useRatesData();

  const getRate = () => {
    if (ratesData.status === "success" && ratesData.conversion_rates) {
      const rate = ratesData.conversion_rates[currency];
      return 1 / rate;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <Clock />
        {ratesData.status === "loading"
          ? (           
              <Spinner/>
            )
          : (
            ratesData.status === "error" ? (
              console.log("błąd w pobieraniu"),
              <p>
                Nastąpił błąd przy pobieraniu danych...<br/>
                Sprawdź swoje połączenie z internetem, albo skontaktuj się z usługodawcą strony.
              </p>
            ) : (
              <>
                <Label>Waluta</Label>
                <Select
                onFormSubmit={onFormSubmit}
                  ratesData={ratesData}
                  currency={currency}
                  setCurrency={setCurrency}
                />
                <Label>Kwota</Label>
                <Result
                    
                  amount={amount}
                  getRate={getRate()}
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