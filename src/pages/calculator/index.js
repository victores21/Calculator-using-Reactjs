import React, { useState } from "react";
import "./sass/index.css"


const Calculator = () => {

    const [value, setValue] = useState({
        input: "",
    });


    const handleAddToLog = (calValue, event) => {
        if (event.target.id === "equal") {
            if (value.input == "") {
                setValue({ input: "" })
                console.log("He")
            } else {
                const result = parseInt(eval(value.input));
                const resultString = String(result);
                setValue({ input: resultString })
            }
        } else {
            let cou = value.input + calValue;
            setValue({ input: cou })
            console.log(cou);
        }
    }

    const handleClearLog = () => {
        setValue({ input: "" })
    }

    /*     const handleOperations = event => {
            if (event.target.id === "add") {
                const final = eval(value.input);
                console.log(final);
                setValue({ input: final })
            }
        }
     */

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" name="" id="cal_log" value={value.input} />
                    <div className="main-btns" onClick={() => handleClearLog()} id="clear">clear</div>
                    <div className="action-btns" onClick={(event) => handleAddToLog("/", event)} id="divide">÷</div>
                    <div className="action-btns" onClick={(event) => handleAddToLog("-", event)} id="subtraction">-</div>
                    <div className="action-btns" onClick={event => handleAddToLog("+", event)} id="add">+</div>
                    <div className="action-btns" onClick={event => handleAddToLog("=", event)} id="equal">=</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(9, event)} id="nine">9</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(8, event)} id="eight">8</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(7, event)} id="seven">7</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(6, event)} id="six">6</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(5, event)} id="five">5</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(4, event)} id="four">4</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(3, event)} id="three">3</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(2, event)} id="two">2</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(1, event)} id="one">1</div>
                    <div className="main-btns" onClick={(event) => handleAddToLog(0, event)} id="zero">0</div>
                </div>
            </div>
        </>
    )
}

export default Calculator;