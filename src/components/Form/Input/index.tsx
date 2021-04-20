import { FunctionComponent } from "react"

interface InputProps {
  id: string;
  name: string;
  type: "text" | "search" | "number" | "password" | "email";
  value: string | number;
  className: string;
  onChange: () => void;
}

export const Input: FunctionComponent<InputProps> = ({ id, type = 'text', value, onChange }) => {
  return (
    <input
      className="input"
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}
