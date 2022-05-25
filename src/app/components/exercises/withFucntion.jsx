import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem("user");
    const [, setRender] = useState(false);

    const onLogin = () => {
        localStorage.setItem("user", "user");
        setRender((prevState) => !prevState);
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setRender((prevState) => !prevState);
    };
    return (
        <CardWrapper>
            <Component
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isLogin}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFunctions;
