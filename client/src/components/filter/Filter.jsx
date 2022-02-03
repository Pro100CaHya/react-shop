import React from 'react';

import Button from '../UI/button/Button';

import "./Filter.sass";

const Filter = ({ filter, setFilter, brands, colors, memory }) => {

    const openFilter = () => {

        document.querySelector(".filter__title")
            .classList
            .toggle("filter__title_active");

        document.querySelector(".filter__content")
            .classList
            .toggle("filter__content_active");

    }

    const clearFilterParams = (e) => {

        e.preventDefault();
        setFilter({ ...filter, params: { brands: [], colors: [], memory: [] } });
        const elems = document.querySelectorAll(".filter__params-item");

        for (const elem of elems) {

            elem.classList.remove("filter__params-item_active");

        }

    }

    const setFilterParams = (e, param) => {

        if (e.target.classList.contains("filter__params-item_active")) {

            e.target.classList.remove("filter__params-item_active");
            setFilter({ ...filter, params: { ...filter.params, [param[0]]: filter.params[param[0]].filter(elem => elem !== param[1]) } });

        } else {

            e.target.classList.add("filter__params-item_active");
            setFilter({ ...filter, params: { ...filter.params, [param[0]]: [...filter.params[param[0]], param[1]] } });

        }


    }

    return (

        <div className="filter">
            <p className="filter__title" onClick={openFilter}>filter</p>
            <div className="filter__content">
                <ul className="filter__list list">
                    <li className="filter__item">
                        <p className="filter__name">brand</p>
                        <div className="filter__params-list">
                            {brands.map((elem, id) =>
                                <div key={id} className="filter__params-item" onClick={(e) => setFilterParams(e, ["brands", `${elem}`])}>
                                    {elem}
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="filter__item">
                        <p className="filter__name">color</p>
                        <div className="filter__params-list">
                            {colors.map((elem, id) =>
                                <div key={id} className="filter__params-item" onClick={(e) => setFilterParams(e, ["colors", `${elem}`])}>
                                    {elem}
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="filter__item">
                        <p className="filter__name">memory</p>
                        <div className="filter__params-list">
                            {memory.map((elem, id) =>
                                <div key={id} className="filter__params-item" onClick={(e) => setFilterParams(e, ["memory", elem])}>
                                    {elem} GB
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
                <Button className="button" onClick={clearFilterParams}>clear</Button>
            </div>
        </div >

    );

}

export default Filter;