interface BurgerProps {
  isOpen: boolean;
  handleClick: (value: boolean) => void;
}

export const Burger = ({ isOpen, handleClick }) => {
  return (
    <button className={`${isOpen ? 'burger-menu burger-isOpen' : 'burger-menu'}`} onClick={handleClick}>
      <div />
    </button>
  )
}
