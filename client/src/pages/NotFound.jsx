import React from "react";

import Main from "../components/main/Main";

const NotFound = () => {

    return (

        <Main title="404 😟">
            <p className="main__text main__text_not-found">
                Ooops... Page not found
            </p>
        </Main>

    );

}

export default NotFound;