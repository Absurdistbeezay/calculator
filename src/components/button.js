import React, { Component } from 'react';
import DisplayPanel from './display-panel';

import "./button.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ""
        }
    }

    onClick(val) {
        switch (val) {
            case "=":
                this.calculate();
                break;
            case "c":
                this.reset();
                break;
            default:

                this.setState({
                    values: this.state.values + val
                })


        }
    }

    calculate() {
        if (this.state.values === "" || undefined) {
            return;
        }
        this.setState({
            values: eval(this.state.values)
        })
    }

    reset() {
        this.setState({
            values: ""
        })
    }
    render() {
        return (
            <>
                <DisplayPanel result={this.state.values} />
                <div className="buttons-panel">
                    <div className="row">
                        <button className="btn btn-yellow" id="divide" onClick={() => { this.onClick("/") }}>/</button>
                        <button className="btn" id="seven" onClick={() => { this.onClick("7") }}>7</button>
                        <button className="btn" id="eight" onClick={() => { this.onClick("8") }}>8</button>
                        <button className="btn" id="nine" onClick={() => { this.onClick("9") }}>9</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" id="multiply" onClick={() => { this.onClick("*") }}>x</button>
                        <button className="btn" id="four" onClick={() => { this.onClick("4") }}>4</button>
                        <button className="btn" id="five" onClick={() => { this.onClick("5") }}>5</button>
                        <button className="btn" onClick={() => { this.onClick("6") }}>6</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" id="subtract" onClick={() => { this.onClick("-") }}>-</button>
                        <button className="btn" id="one" onClick={() => { this.onClick("1") }}>1</button>
                        <button className="btn" id="two" onClick={() => { this.onClick("2") }}>2</button>
                        <button className="btn" onClick={() => { this.onClick("3") }}>3</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" id="add" onClick={() => { this.onClick("+") }}>+</button>
                        <button className="btn btn-red" id="clear" onClick={() => { this.onClick("c") }}>c</button>
                        <button className="btn" id="zero" onClick={() => { this.onClick("0") }}>0</button>
                        <button className="btn btn-green" id="equals" onClick={() => { this.onClick("=") }}>=</button>
                    </div>
                    <div className="row row-center"><button className="btn" id="decimal" onClick={() => { this.onClick(".") }}>.</button></div>
                </div>
            </>
        )
    }
}

export default Button;
