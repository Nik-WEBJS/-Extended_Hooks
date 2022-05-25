import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const buttomRef = useRef();
    const [text, setText] = useState("Блок");
    const handleButtomClick = () => {
        buttomRef.current.style.width = "150px";
        buttomRef.current.style.height = "80px";
        setText((prevState) => (prevState === "Блок" ? "Text" : "Блок"));
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={buttomRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{text}</small>
            </div>
            <button className="btn btn-primary" onClick={handleButtomClick}>
                Кликни
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
