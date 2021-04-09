export const Button = ({ children, type = 'button' }) => {
  return (
    <button
      type={type}
      className="bg-yellow-500 text-white font-semibold px-3 py-2 rounded hover:bg-opacity-80">
      {children}
    </button>
  )
}