import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <Count count={count} />
            <Button onclick={incrementCount} />
        </div>
        );
} 