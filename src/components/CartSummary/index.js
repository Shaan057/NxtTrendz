import {useState} from 'react'
import Popup from 'reactjs-popup'
// import {FaCcMastercard} from 'react-icons/fa'
import {SiMastercard, SiPaypal} from 'react-icons/si'
// import {MdWallet} from 'react-icons/md'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const [codOptionSelected, setCodOptionSelected] = useState(false)

  const onChangeInput = event => {
    const isChecked = event.target.checked
    if (isChecked) {
      setCodOptionSelected(true)
    } else {
      setCodOptionSelected(false)
    }
  }
  const date = new Date().toLocaleDateString()
  const isCod = true
  return (
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
            <Popup
              trigger={
                <button className="checkout-button" type="button">
                  Checkout
                </button>
              }
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <div className="summary-style">
                    <h1 className="styling">Summary</h1>
                    <p className="todays-date">Date : {date}</p>
                  </div>
                  <div className="pricing-container">
                    <h2 className="total-items">
                      Total Items : {cartList.length}
                    </h2>
                    <h2 className="total-items">
                      Total Amount : <span>{finalPrice}</span>/-
                    </h2>
                  </div>
                  <h1 className="styling">Select Payments Option</h1>
                  <form className="payments-options">
                    <div className="input-container">
                      <input
                        id="card"
                        type="checkbox"
                        onChange={onChangeInput}
                        value="CARD"
                        disabled={isCod}
                      />
                      <label className="payments-label" htmlFor="card">
                        Card
                      </label>
                      <SiMastercard className="icon" />
                    </div>
                    <div className="input-container">
                      <input
                        id="netBanking"
                        type="checkbox"
                        onChange={onChangeInput}
                        value="NETBANKING"
                        disabled={isCod}
                      />
                      <label className="payments-label" htmlFor="netBanking">
                        Net Banking
                      </label>
                      {/* <CiBank className="icon" /> */}
                    </div>
                    <div className="input-container">
                      <input
                        id="upi"
                        type="checkbox"
                        onChange={onChangeInput}
                        value="UPI"
                        disabled={isCod}
                      />
                      <label className="payments-label" htmlFor="upi">
                        Upi
                      </label>
                      <SiPaypal className="icon" />
                    </div>
                    <div className="input-container">
                      <input
                        id="wallet"
                        type="checkbox"
                        onChange={onChangeInput}
                        value="WALLET"
                        disabled={isCod}
                      />
                      <label className="payments-label" htmlFor="wallet">
                        Wallet
                      </label>
                      {/* <MdWallet className="icon" /> */}
                    </div>
                    <div className="input-container">
                      <input
                        id="cod"
                        type="checkbox"
                        onChange={onChangeInput}
                        value="COD"
                      />
                      <label className="payments-label" htmlFor="cod">
                        Cash on Delivery
                      </label>
                    </div>
                  </form>
                  <div className="buttons-container">
                    <Popup
                      trigger={
                        <button
                          className={
                            codOptionSelected
                              ? 'confirm-button'
                              : 'confirm-button disabled-button'
                          }
                          type="button"
                          disabled={!codOptionSelected}
                        >
                          Confirm Order
                        </button>
                      }
                      modal
                      nested
                    >
                      <div className="payment-success">
                        <div className="tick">&#x2714;</div>
                        <div>
                          <p className="order-places-msg">
                            Your order has been placed successfully
                          </p>
                        </div>
                        <button
                          className="confirm-button"
                          onClick={() => close()}
                          type="button"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </Popup>

                    <button
                      className="confirm-button"
                      type="button"
                      onClick={close}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
