import Legend from "./Legend";
import Container from "./Container";
import Section from "./Section";
import Select from "./Select";
import AmountInput from "./AmountInput";
import Result from "./Result"

function App() {
  return (
    <Container>
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title="Kalkulator walut" />
          <Section title="Waluta:" body={<Select />} />
          <Section title="Kwota:" body={<AmountInput />} />
          <Result />
          <p>
            <input className="form__fieldInformation" name="sume" value="0.00" readonly />*
          </p>
          <p>
            <span className="form__textInformation">*aktualny kurs walut na dzień 31.10.2022</span>
          </p>
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
