export default function InputText({id, labelTitle, placeholder}) {
  return (
    <div>
      <label htmlFor={id} className="text-primary-davy-grey font-medium">
        {labelTitle}
      </label>
      <input
        className="input-form"
        type="text"
        name=""
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
