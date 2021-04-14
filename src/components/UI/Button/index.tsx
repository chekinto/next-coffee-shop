import { FunctionComponent } from "react"

interface ButtonProps {
  type: "button" | "submit" | "reset"
}

export const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button' }) => {
  return (
    <button type={type}>
      {children}
    </button>
  )
}