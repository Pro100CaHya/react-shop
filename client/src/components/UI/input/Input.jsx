import React from "react";

import "./Input.sass";

const Input = (props) => {

    return (

        <input
            className={props?.className}
            type={props?.type}
            placeholder={props?.placeholder}
            value={props?.value}
            onChange={props?.onChange}
            onClick={props?.onClick}
            alt={props?.alt}
            src={props?.src}
        />

    );

}

export default Input;