import { useRef, useState } from "react";

/**
 * Example for using useRef hook with purpose for accessing persisted mutable value.
 * Value is number of clicks on certain button.
 * useRef change does not trigger re-rendering of component.
 * current value is shared amoung multiple renderings.
 * useState will cause every time re-rendering of the component.
 */
const ReferenceContainer = () => {
    const countRef = useRef(0);

    //State
    //const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        countRef.current++;
        console.log(`Button clicked ${countRef.current} times`);

        // setCount(count => count + 1);
        // console.log(`Button clicked ${count} times`);
    }

    console.log('Render');

    return (
        <button onClick={handleButtonClick}>Click me</button>
    )
}

export default ReferenceContainer;