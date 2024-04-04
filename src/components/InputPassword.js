import TextError from "./textError";

export default function InputPassword({ id, labelTitle, placeholder, errorMsg }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-primary-davy-grey">
        {labelTitle}
      </label>
      <input
        className="input-form"
        type="password"
        name={id}
        id={id}
        placeholder={placeholder}
      />
      <TextError msg={errorMsg} />
    </div>
  );
}
