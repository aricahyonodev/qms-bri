import TextError from "./textError";

export default function InputText({ id, labelTitle, placeholder, errorMsg }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-primary-davy-grey">
        {labelTitle}
      </label>
      <input
        className="input-form"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
      />
      <TextError msg={errorMsg} />
    </div>
  );
}
