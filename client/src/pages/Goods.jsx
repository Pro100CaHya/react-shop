import React, { useState, useEffect } from 'react';

import { useItems } from "../hooks/useItems";
import { useFetching } from '../hooks/useFetching';
import ItemService from '../API/ItemService';

import Main from '../components/main/Main';
import Form from "../components/form/Form";
import Items from "../components/items/Items";

const Goods = ({ addToCartItem }) => {

    const [items, setItems] = useState([]);

    const [fetchItems, isItemsLoading, itemError] = useFetching(async () => {

        const items = await ItemService.getAll();
        setItems(items);

    });

    const [filter, setFilter] = useState({ sort: "", params: { brands: [], colors: [], memory: [] }, query: "" });

    useEffect(() => {

        fetchItems();

    }, []);

    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query, filter.params);

    return (

        <Main title="Goods">
            <Form
                filter={filter}
                setFilter={setFilter}
            />
            <Items
                items={sortedAndSearchedItems}
                isItemsLoading={isItemsLoading}
                itemError={itemError}
                addToCartItem={addToCartItem}
            />
        </Main>

    );

}

export default Goods;