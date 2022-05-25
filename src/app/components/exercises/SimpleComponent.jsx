import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
    const btnClasses = isAuth ? "btn btn-danger" : "btn btn-primary";
    return (
        <>
            {isAuth ? (
                <button onClick={onLogOut} className={btnClasses}>
                    Выйти
                </button>
            ) : (
                <button onClick={onLogin} className={btnClasses}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func
};

export default SimpleComponent;
