import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState('');

    const handleInc = () => {
        setCount(prev => prev + 1);
        setLastAction('Increment');
    }

    const handleDec = () => {
        setCount(prev => prev - 1);
        setLastAction('Decrement');
    }

    const handleReset = () => {
        setCount(0);
        setLastAction('Reset');
    }

    useEffect(() => {
        console.log('Counter Update: ', count);
    }, [count]);


    return (
        <div>
            <h2>Counter</h2>

            <div>{count}</div>
            <div>
                <Button name="Inc" count={count} handleClick={handleInc} />
                <Button name="Dec" count={count} handleClick={handleDec} />
                <Button name="Reset" count={count} handleClick={handleReset} />
            </div>
        </div>
    )
}

export default Counter;
