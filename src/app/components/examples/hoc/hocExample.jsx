import React from "react";
import Component from "./someComponent";
import withLogin from "./withLogin";
import withPropsStyle from "./withPropsStyles";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsStyle = withPropsStyle(Component);
    const NewComponent = withPropsStyle(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsStyle />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
