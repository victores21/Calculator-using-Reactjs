import React from "react";
import "./sass/index.css"


const Calculator = () => {
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" name="" id="cal_log" value="0" />
                    <div className="main-btns" id="clear">clear</div>
                    <div className="action-btns" id="divide">÷</div>
                    <div className="action-btns" id="subtraction">-</div>
                    <div className="action-btns" id="add">+</div>
                    <div className="action-btns" id="equal">=</div>
                    <div className="main-btns" id="nine">9</div>
                    <div className="main-btns" id="eight">8</div>
                    <div className="main-btns" id="seven">7</div>
                    <div className="main-btns" id="six">6</div>
                    <div className="main-btns" id="five">5</div>
                    <div className="main-btns" id="four">4</div>
                    <div className="main-btns" id="three">3</div>
                    <div className="main-btns" id="two">2</div>
                    <div className="main-btns" id="one">1</div>
                </div>
            </div>
        </>
    )
}

export default Calculator;