import React from "react";

import "./Main.sass"

const Main = ({ children, title }) => {

    return (

        <main className="main">
            <h2 className="main__title">{title}</h2>
            <div className="main__content content">
                {children}
            </div>
        </main>

    );

}

export default Main;