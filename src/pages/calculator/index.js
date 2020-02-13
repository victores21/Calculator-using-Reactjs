import React, { useState } from "react";
import "./sass/index.css"


const Calculator = () => {

    const [value, setValue] = useState(0);

    const handleChange = calValue => {
        setValue(calValue);
    }


    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" name="" id="cal_log" value={value} />
                    <div className="main-btns" onClick={() => handleChange(0)} id="clear">clear</div>
                    <div className="action-btns" onClick={() => handleChange("÷")} id="divide">÷</div>
                    <div className="action-btns" onClick={() => handleChange("-")} id="subtraction">-</div>
                    <div className="action-btns" onClick={() => handleChange("+")} id="add">+</div>
                    <div className="action-btns" onClick={() => handleChange("=")} id="equal">=</div>
                    <div className="main-btns" onClick={() => handleChange(9)} id="nine">9</div>
                    <div className="main-btns" onClick={() => handleChange(8)} id="eight">8</div>
                    <div className="main-btns" onClick={() => handleChange(7)} id="seven">7</div>
                    <div className="main-btns" onClick={() => handleChange(6)} id="six">6</div>
                    <div className="main-btns" onClick={() => handleChange(5)} id="five">5</div>
                    <div className="main-btns" onClick={() => handleChange(4)} id="four">4</div>
                    <div className="main-btns" onClick={() => handleChange(3)} id="three">3</div>
                    <div className="main-btns" onClick={() => handleChange(2)} id="two">2</div>
                    <div className="main-btns" onClick={() => handleChange(1)} id="one">1</div>
                </div>
            </div>
        </>
    )
}

export default Calculator;