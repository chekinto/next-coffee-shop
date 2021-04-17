interface BurgerProps {
  handleClick: (value: boolean) => void;
}

export const Burger = ({ handleClick }) => {
  return (
    <button className="burger-menu" onClick={handleClick}>
      <div />
    </button>
  )
}
