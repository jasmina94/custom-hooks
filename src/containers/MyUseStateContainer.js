import Button from "@restart/ui/esm/Button";
import React, { useDebugValue } from "react";
import { Stack } from "react-bootstrap";
import useMyState from "../customHooks/UseMyState";

const initState = {
    count: 0
}

const actions = {
    INCREMENT: { type: 'increase' },
    DECREMENT: { type: 'decrease' }
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + 1 };
        case 'decrease':
            return { ...state, count: state.count - 1 };
        default:
            return { ...state };
    }
};

const MyUseStateContainer = () => {
    const [state, dispatch] = useMyState(initState, reducerFunc);
    useDebugValue(state.count > 0 ? 'Positive' : 'Negative');

    return (
        <Stack direction="vertical">
            <p>Count: {state.count}</p>
            <Button variant="success" onClick={() => dispatch(actions.INCREMENT)}>Inc</Button>
            <Button variant="danger" onClick={() => dispatch(actions.DECREMENT)}>Dec</Button>
        </Stack>
    )
}

export default MyUseStateContainer;