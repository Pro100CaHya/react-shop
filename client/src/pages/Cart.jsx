import React from "react";

import Main from '../components/main/Main';
import CartItem from "../components/cartItem/CartItem";

const Cart = ({ cartItems, deleteFromCartItem }) => {

    return (

        <Main title="Cart">


            {

                cartItems.length !== 0 ?
                    <div className="cart">
                        <div className="cart__list">
                            {

                                cartItems.map(cartItem =>

                                    <CartItem key={cartItem.id} item={cartItem} deleteFromCartItem={deleteFromCartItem} />

                                )

                            }

                        </div>
                        <div className="cart-price">
                            <p className="cart-price__title">Total</p>
                            <p className="cart-price__total-price">
                                {

                                    cartItems.reduce((total, cartItem) => {

                                        return total + (cartItem.price * cartItem.count)

                                    }, 0)

                                } $
                            </p>
                        </div>
                    </div>

                    :

                    <p className="main__text main__text_not-found">
                        No items in cart
                    </p>

            }



        </Main >

    );

}

export default Cart;