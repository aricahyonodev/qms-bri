export default function InputPassword({ id, labelTitle, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-primary-davy-grey font-medium">
        {labelTitle}
      </label>
      <input
        className="input-form"
        type="password"
        name=""
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
