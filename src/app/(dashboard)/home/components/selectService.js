const services = [
  { value: 0, label: "Pendaftaran (dilayani oleh Customer Service)" },
  { value: 1, label: "Transaksi (dilayani oleh Teller)" },
  { value: 2, label: "Transaksi (dilayani oleh Petugas Kredit)" },
];

export default function SelectService({ labelTitle, id }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-primary-davy-grey">
        {labelTitle}
      </label>
      <select id={id} className="input-form p-2 focus:outline-blue-500">
        {services.map(({ label, value }) => (
          <option key={value + label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
