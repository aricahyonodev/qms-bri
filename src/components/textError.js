export default function TextError({ msg, className }) {
  return (
    <p
      className={
        "mt-2 text-red-800 " + className + ` ${msg ? "visible" : "hidden"}`
      }
    >
      {msg}
    </p>
  );
}
