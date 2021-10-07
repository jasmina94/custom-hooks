import { useEffect, useReducer, useRef } from "react";
import { Stack, Button } from "react-bootstrap";

const initialState = {
    isRunning: false,
    time: 0
};

const actions = {
    START: { type: 'start' },
    STOP: { type: 'stop' },
    RESTART: { type: 'restart' },
    TICK: { type: 'tick' }
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, isRunning: true };
        case 'tick':
            return { ...state, time: state.time + 1 };
        case 'restart':
            return { ...state, isRunning: true, time: 0 }
        case 'stop':
            return { ...state, isRunning: false }
        default:
            return { ...state };
    }
}

const Stopwatch = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);
    const intervalIdRef = useRef(0);

    useEffect(() => {
        console.log('useEffect triggered');

        if (!state.isRunning) {
            return;
        }
        // Scheduling the call - dispatch action
        intervalIdRef.current = setInterval(() => dispatch(actions.TICK), 1000);

        console.log(intervalIdRef);

        return () => {
            //When stop action fires
            console.log('return clean up');

            clearInterval(intervalIdRef.current);
            intervalIdRef.current = 0;
        };

    }, [state.isRunning]);

    // Log this every time state changes, on every second
    console.log('render');

    return (
        <div>
            <p>Current time: {state.time}s</p>
            <Stack direction="horizontal" gap={2}>
                <Button variant="success" onClick={() => dispatch(actions.START)}>Start</Button>
                <Button variant="warning" onClick={() => dispatch(actions.STOP)}>Stop</Button>
                <Button variant="danger" onClick={() => dispatch(actions.RESTART)}>Reset</Button>
            </Stack>
        </div>
    )
}

export default Stopwatch;