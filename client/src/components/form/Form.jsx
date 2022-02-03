import React from "react";

import Select from "../UI/select/Select";
import Input from "../UI/input/Input";
import Filter from "../filter/Filter";


const Form = ({filter, setFilter}) => {

    return (

        <form className="form">
            <div className="row">
                <Select
                    defaultValue="sort by"
                    options={["name", "description", "price ↑", "price ↓"]}
                    value={filter?.sort}
                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                />
                <Input
                    className="input"
                    type="text"
                    placeholder="search..."
                    value={filter?.query}
                    onChange={e => setFilter({ ...filter, query: e.target.value })}
                />
            </div>
            <Filter
                filter={filter}
                setFilter={setFilter}
                brands={["Apple", "Nokia", "OnePlus", "realme", "Samsung", "Xiaomi"]}
                colors={["black", "blue", "dark blue", "green", "grey", "purple", "red", "white", "yellow"]}
                memory={[2, 64, 128, 256, 512]}
            />
        </form>

    );

}

export default Form;