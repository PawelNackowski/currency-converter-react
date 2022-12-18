import Legend from "./Legend"
import Container from "./Container";
import Section from "./Section"

function App() {
  return (
    <Container>
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title="Kalkulator walut" />
          <label className="form__label">
            Waluta:
          </label>
          <p>
            <select id="currencySelect" className="form__field">
              <option value="0.00">-- wybierz walutę --</option>
              <option value="4.7199">EURO</option>
              <option value="4.7477">USD</option>
              <option value="4.7705">CHF</option>
            </select>
          </p>
          <label className="form__label">
            Kwota:
          </label>
          <p>
            <input className="form__field" type="number" name="amount" min="1" />
          </p>
          <p>
            <span className="form__valuePosition">Kwota w PLN : <strong>0.00</strong></span>
          </p>
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
