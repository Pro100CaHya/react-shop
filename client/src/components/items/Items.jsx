import React from 'react';

import Item from '../item/Item';
import Loader from '../UI/loader/Loader';

import "./Items.sass";

const Items = ({ items, isItemsLoading, itemError, addToCartItem }) => {

    return (

        <div className="items">
            {
                itemError ?

                    <div className="items__message items__message_error">
                        <h2 className="items__message-title">Error 😟</h2>
                        <p className="items__message-text">{itemError}</p>
                    </div>

                    : isItemsLoading ?

                        <div className="items__content">

                            {[0, 1, 2].map(elem => <Loader key={elem} />)}

                        </div>

                        :

                        items.length !== 0 ?

                            <div className="items__content">
                                {items.map(
                                    item => <Item
                                        item={item}
                                        key={item.id}
                                        addToCartItem={addToCartItem}
                                    />
                                )}
                            </div>

                            :

                            <div className="items__message items__message_warning">
                                <h2 className="items__message-title">Oops... 😔</h2>
                                <p className="items__message-text">No items found</p>
                            </div>
            }
        </div>

    );

}

export default Items;