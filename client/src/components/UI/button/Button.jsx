import React from 'react';

import "./Button.sass";

const Button = (props) => {

    return (

        <button onClick={props?.onClick} className={props?.className}>{props.children}</button>

    );

}

export default Button;