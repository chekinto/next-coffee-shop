import { FunctionComponent } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_QUANTITY } from '../../../queries'
import { ProductProps } from '../../../types'
import { formatPrice } from '../../../utils'
import { useAppContext } from '../../../context'

export const CartItem: FunctionComponent<ProductProps> = ({ id, image, title, description, price }) => {
  const { state } = useAppContext()

  const [increment, { data }] = useMutation(UPDATE_QUANTITY)
  return (
    <article className="cart-item">
      <div className="cart-item__image">
        <img src={image} alt="" />
      </div>

      <div className="cart-item__content">
        <p>{title}</p>
        <p>{description}</p>
        <p>{formatPrice(price)}</p>
        <div className="quantity">
          <button className="btn">-</button>
          <span>Quantity</span>
          <button
            onClick={() => increment({ variables: { id, quantity: 2 } })}
            className="btn">+</button>
        </div>
      </div>
    </article >
  )
}
