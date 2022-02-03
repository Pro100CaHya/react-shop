import React from 'react';

import Item from '../item/Item';
import Loader from '../UI/loader/Loader';

import "./Goods.sass";

const Goods = ({ items, isItemsLoading, itemError }) => {

    return (

        <div className="goods">
            {
                itemError ?

                    <div className="goods__message goods__message_error">
                        <h2 className="goods__message-title">Error 😟</h2>
                        <p className="goods__message-text">{itemError}</p>
                    </div>

                    : isItemsLoading ?

                        <div className="goods__content">

                            {[0, 1, 2].map(elem => <Loader key={elem} />)}

                        </div>

                        :

                        items.length !== 0 ?

                            <div className="goods__content">
                                {items.map(
                                    item => <Item
                                        price={item.price}
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        colors={item.colors}
                                        memory={item.memory}
                                    />
                                )}
                            </div>

                            :

                            <div className="goods__message goods__message_warning">
                                <h2 className="goods__message-title">Oops... 😔</h2>
                                <p className="goods__message-text">No items found</p>
                            </div>
            }
        </div>

    );

}

export default Goods;