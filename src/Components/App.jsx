import { useState } from "react";
import Button from "./Button";
import "./App.css";

export default function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="parent-container">
            <div className="container">
                <div className="heading">
                    <h2>COUNTER APP</h2>
                </div>
                <div className="count">
                    <p>{count}</p>
                </div>
                <div className="buttons">
                    <Button id="incr" type="button" value="INCREMENT" onClickHandler={increment} />
                    <Button id="rst" type="button" value="RESET" onClickHandler={reset}/>
                    <Button id="dec" type="button" value="DECREMENT" onClickHandler={decrement}/>
                </div>
            </div>
        </div>
    )
}