import React from "react";
import CollapseWrapper from "../common/collapse";

const NumList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div style={{ display: "flex" }}>
                <p>{index + 1 + ") "} </p>
                {React.cloneElement(child)}
            </div>
        );
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumList>
                <Component />
                <Component />
                <Component />
            </NumList>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
