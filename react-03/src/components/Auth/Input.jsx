import { useId } from "react";
export default function Input({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
