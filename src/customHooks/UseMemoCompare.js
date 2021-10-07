import { useEffect, useRef } from "react";

// Comapring values and useMemo
const useMemoCompare = (next, compare) => {
    const previousRef = useRef();           // value stays the same between renderings
    const previous = previousRef.current;
    const isEqual = compare(previous, next);

    // If not equal update previousRef to next value.
    // We only update if not equal so that this hook continues to return
    // the same old value if compare keeps returning true.
    useEffect(() => {
        if (!isEqual) {
            console.log('not equal');
            previousRef.current = next;
        }
        console.log('equal');
    });

    return isEqual ? previous : next;
}

export default useMemoCompare;