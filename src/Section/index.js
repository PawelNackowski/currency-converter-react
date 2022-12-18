import './style.css'

const Section = ({title, body}) => (
  <><label className="form__label">
    {title}
  </label><p>
      {body}
    </p></>
);

export default Section;