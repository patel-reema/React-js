import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState('');

    const handleINC = () => {
        setCount(prev => prev + 1);
        setLastAction('INC');
    }

    const handleDEC = () => {
        setCount(prev => prev - 1);
        setLastAction('DEC');
    }

    useEffect(() => {
        console.log('Counter Update: ', count);
    }, [count]);


    return (
        <div>
            <h2>Counter</h2>

            <div>{count}</div>
            <div>
                <Button name="INC" count={count} handleClick={handleINC} />
                <Button name="DEC" count={count} handleClick={handleDEC} />
            </div>
        </div>
    )
}

export default Counter;
