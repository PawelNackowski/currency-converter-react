import Legend from "./Legend";
import Container from "./Container";
import Section from "./Section";
import Select from "./Select";
import AmountInput from "./AmountInput";
import Result from "./Result"
import Information from "./Information";
import InformationInput from "./InformationInput";

function App() {
  return (
    <Container>
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title="Kalkulator walut" />
          <Section title="Waluta:" body={<Select />} />
          <Section title="Kwota:" body={<AmountInput />} />
          <Result />
          <Information input={<InformationInput />} text="*aktualny kurs walut na dzień 31.10.2022" />
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
