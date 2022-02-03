import React, { useState } from 'react';

import Input from '../UI/input/Input';

import buttonAddToCart from "../../img/add-to-cart-button.svg";

import "./Item.sass";

const Item = ({ item, addToCartItem }) => {

    const [selectedParams, setSelectedParams] = useState({ price: item.price[0], color: item.colors[0], memory: item.memory[0] });

    function setColor(e, color, id) {

        const elems = document.querySelectorAll(`.item__color_${id}`);

        for (const elem of elems) {

            if (elem.classList.contains("item__color_active")) {

                elem.classList.remove("item__color_active");
                break;

            }

        }

        e.target.classList.add("item__color_active");
        setSelectedParams({ ...selectedParams, color: color });

    }

    function setMemory(e, mem, id) {

        const elems = document.querySelectorAll(`.item__memory_${id}`);

        for (const elem of elems) {

            if (elem.classList.contains("item__memory_active")) {

                elem.classList.remove("item__memory_active");
                break;

            }

        }

        e.target.classList.add("item__memory_active");
        setSelectedParams({ ...selectedParams, memory: mem, price: item.price[item.memory.indexOf(mem)] });

    }

    function addToCart() {

        addToCartItem({ ...item, colors: selectedParams.color, memory: selectedParams.memory, price: selectedParams.price});

    }

    return (

        <div className="item">
            <Input onClick={addToCart} className="item__add-button" type="image" src={buttonAddToCart} alt="add-to-cart" />
            <img className="item__image" src={item.imageUrl} alt="iphone-11" />
            <h6 className="item__name">{item.name}</h6>
            <p className="item__description">{item.description}</p>
            <p className="item__price">{selectedParams.price} $</p>
            <div className="item__color-selector">
                {
                    item.colors.map((color, num) =>
                        <div
                            key={num}
                            className={color === selectedParams.color ? `item__color item__color_${item.id} item__color_${color} item__color_active` : `item__color item__color_${item.id} item__color_${color}`}
                            onClick={(e) => setColor(e, color, item.id)}
                        >
                        </div>
                    )
                }
            </div>
            <div className="item__memory-selector">
                {
                    item.memory.map((mem, num) =>
                        <div
                            key={num}
                            className={mem === selectedParams.memory ? `item__memory item__memory_${item.id} item__memory_active` : `item__memory item__memory_${item.id}`}
                            onClick={(e) => setMemory(e, mem, item.id)}
                        >
                            {mem}
                        </div>
                    )
                }
            </div>
        </div>

    );

}

export default Item;