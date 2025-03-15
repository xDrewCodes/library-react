
import React from 'react'
import CartItem from '../components/CartItem'
import emptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';

function Cart({ cart, changeQuantity, removeItem }) {

    function subTotal() {
        let price = 0;
        for (let i = 0; i < cart.length; i++) {
            price += +(cart[i].salePrice || cart[i].originalPrice) * +cart[i].quantity
        }
        return price.toFixed(2)
    }

    function tax() { return (+subTotal() * 0.07).toFixed(2) }
    function total() { return (+subTotal() + +tax()).toFixed(2) }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return (
                                            <CartItem book={book} changeQuantity={changeQuantity} removeItem={removeItem} />
                                        )
                                    })
                                }
                            </div>
                            {
                                !cart.length &&
                                <div className="cart__empty">
                                    <img src={emptyCart} alt="" className="cart__empty--img" />
                                    <Link to="/books">
                                        <button className="btn">Browse books</button>
                                    </Link>
                                </div>
                            }
                        </div>
                        {
                            !!cart.length &&
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${subTotal()}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${tax()}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${total()}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor">Proceed to checkout</button>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart
