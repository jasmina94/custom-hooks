import { useEffect, useState } from "react";
import useMemoCompare from "../customHooks/UseMemoCompare";

const MemoExample = ({ obj }) => {
    const [state, setState] = useState();

    const objFinal = useMemoCompare(obj, (prev, next) => {
        return prev && prev.id === next.id;
    });

    useEffect(() => {
        return objFinal.someMethod().then((value) => setState(value));
    }, [objFinal.id]);

    return (
        <div>
            <p>{state}</p>
        </div>
    )
}


export default MemoExample;