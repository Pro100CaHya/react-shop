import React from 'react';

import "./Select.sass";

const Select = ({options, defaultValue, value, onChange}) => {

    return (

        <select
            className="select"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option} value={option}>{option}</option>
                )}
        </select>

    );

}

export default Select;