import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        const operators = ["+", "-", "*", "/"];
        const lastChar = input.slice(-1);

        if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }

        setInput(input + value);
    };


    const clearInput = () => {
        setInput("");
    };

    const calculateResult = () => {
        try {
            const result = eval(input);
            if (result === Infinity) {
                setInput("Error");
            } else {
                setInput(result.toString());
            }
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <Display value={input} />

            <div className="buttons">
                <Button value="7" onClick={handleClick} />
                <Button value="8" onClick={handleClick} />
                <Button value="9" onClick={handleClick} />
                <Button value="/" onClick={handleClick} />

                <Button value="4" onClick={handleClick} />
                <Button value="5" onClick={handleClick} />
                <Button value="6" onClick={handleClick} />
                <Button value="*" onClick={handleClick} />

                <Button value="1" onClick={handleClick} />
                <Button value="2" onClick={handleClick} />
                <Button value="3" onClick={handleClick} />
                <Button value="-" onClick={handleClick} />

                <Button value="0" onClick={handleClick} />
                <Button value="." onClick={handleClick} />
                <button onClick={clearInput}>C</button>
                <Button value="+" onClick={handleClick} />

                <button className="equal" onClick={calculateResult}>=</button>
            </div>
        </div>
    );
}

export default Calculator;
