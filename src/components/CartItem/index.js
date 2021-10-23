import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <div className="cart-item-info">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont" data-testid="cartItem">
            <h1 className="cart-item-mobile-name">{name}</h1>
            <div className="cart-qty-container">
              <button
                className="cart-qty-btn"
                type="button"
                onClick={decreaseQuantity}
                data-testid="decrement-quantity"
              >
                <BsDashSquare size={16} />
              </button>
              <p data-testid="item-quantity" className="cart-qty">
                {quantity}
              </p>
              <button
                className="cart-qty-btn"
                type="button"
                onClick={increaseQuantity}
                data-testid="increment-quantity"
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
