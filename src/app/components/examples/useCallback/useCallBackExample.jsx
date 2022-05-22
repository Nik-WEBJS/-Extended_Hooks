import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // without callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithOutCallback]);

    // with callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render without callback: {withoutCallback.current}</p>
            <p>render with callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
