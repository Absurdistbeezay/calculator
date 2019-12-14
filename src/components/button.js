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
        this.setState({
            values: eval(this.state.values)
        })
        console.log(this.state.values);
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
                        <button className="btn btn-yellow" onClick={() => { this.onClick("/") }}>/</button>
                        <button className="btn" onClick={() => { this.onClick("7") }}>7</button>
                        <button className="btn" onClick={() => { this.onClick("8") }}>8</button>
                        <button className="btn" onClick={() => { this.onClick("9") }}>9</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" onClick={() => { this.onClick("*") }}>x</button>
                        <button className="btn" onClick={() => { this.onClick("4") }}>4</button>
                        <button className="btn" onClick={() => { this.onClick("5") }}>5</button>
                        <button className="btn" onClick={() => { this.onClick("6") }}>6</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" onClick={() => { this.onClick("-") }}>-</button>
                        <button className="btn" onClick={() => { this.onClick("1") }}>1</button>
                        <button className="btn" onClick={() => { this.onClick("2") }}>2</button>
                        <button className="btn" onClick={() => { this.onClick("3") }}>3</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-yellow" onClick={() => { this.onClick("+") }}>+</button>
                        <button className="btn btn-red" onClick={() => { this.onClick("c") }}>c</button>
                        <button className="btn" onClick={() => { this.onClick("0") }}>0</button>
                        <button className="btn btn-green" onClick={() => { this.onClick("=") }}>=</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Button;
