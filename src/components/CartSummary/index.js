import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const finalPrice = cartList
        .map(each => each.quantity * each.price)
        .reduce((acc, current) => acc + current)

      return (
        <div className="summary-box">
          <h1 className="order-total">
            Order Total: <span id="amount">Rs {finalPrice}/-</span>
          </h1>
          <p className="total-cart">{cartList.length} Items in Cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
