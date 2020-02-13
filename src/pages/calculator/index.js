import React from "react";
import "./sass/index.css"


const Calculator = () => {
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <div id="cal_log">Log</div>
                    <div id="clear">clear</div>
                    <div id="divide">%</div>
                    <div id="subtraction">-</div>
                    <div id="add">+</div>
                    <div id="equal">=</div>
                    <div id="nine">9</div>
                    <div id="eight">8</div>
                    <div id="seven">7</div>
                    <div id="six">6</div>
                    <div id="five">5</div>
                    <div id="four">4</div>
                    <div id="three">3</div>
                    <div id="two">2</div>
                    <div id="one">1</div>
                </div>
            </div>
        </>
    )
}

export default Calculator;