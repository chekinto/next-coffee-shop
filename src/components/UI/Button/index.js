export const Button = ({ children, type = 'button' }) => {
  return (
    <button type={type}>
      {children}
    </button>
  )
}