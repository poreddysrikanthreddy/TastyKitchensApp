import {Link} from 'react-router-dom'
import Header from '../Header'

import CartContext from '../../Context/CartContext'

import './index.css'

const BillingSection = () => (
  <CartContext.Consumer>
    {value => {
      const {removeAllCartItems} = value

      const onPayingOrder = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="payment-container">
            <div className="payment-card">
              <img
                src="https://res.cloudinary.com/poreddysrikanth/image/upload/v1634735881/Vector_1_rjhmoy_cyihtg.png"
                alt="success"
                className="payment-image"
              />
              <h1 className="payment-heading">Payment Successful</h1>
              <p className="payment-text">
                Thank you for ordering Your payment is successfully completed.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="home-btn"
                  onClick={onPayingOrder}
                >
                  Go To Home Page
                </button>
              </Link>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default BillingSection
