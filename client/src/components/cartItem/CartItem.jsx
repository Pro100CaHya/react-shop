import React from "react";

import removeButton from "../../img/remove-from-cart-button.svg";

import Input from "../UI/input/Input";

import "./CartItem.sass";

const CartItem = ({ item, deleteFromCartItem }) => {

    function removeItem() {

        deleteFromCartItem(item.id);

    }

    return (

        <div className="cart-item">
            <img className="cart-item__image" src={item.imageUrl} alt={item.name} />
            <div className="cart-item__text">
                <p className="cart-item__title">{item.name}</p>
                <p className="cart-item__color">
                    <span className="cart-item__color_medium">color: </span>
                    {item.colors}
                    <span className={`cart-item__color-circle cart-item__color-circle_${item.colors}`}></span>
                </p>
                <p className="cart-item__memory">
                    <span className="cart-item__memory_medium">memory: </span>
                    {item.memory}
                </p>
                <p className="cart-item__count">
                    <span className="cart-item__count_medium">count: </span>
                    {item.count}
                </p>
                <p className="cart-item__price">
                    <span className="cart-item__price_medium">price: </span>
                    {item.price} $
                </p>
            </div>
            <Input onClick={removeItem} className="cart-item__button" type="image" src={removeButton} alt="remove" />
        </div>

    );

}

export default CartItem;