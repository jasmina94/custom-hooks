import { useReducer } from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const initialState = {
    counter: 0
};

const action = {
    INCREASE: { type: 'increase' },
    DECREASE: { type: 'decrease' }
};

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + 1 };
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
        default:
            return { ...state };
    }
};

/*
* Render will be triggered each time action is dispatched.
*/
const ReducerContainer = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    console.log('Render');

    return (
        <div className="d-flex flex-column">
            <p className="mb-0">Current count: {state.counter}</p>
            <Stack direction="horizontal" gap={2}>
                <Button variant="primary" size="lg" onClick={() => dispatch(action.INCREASE)}>+</Button>
                <Button variant="secondary" size="lg" onClick={() => dispatch(action.DECREASE)}>-</Button>
            </Stack>
        </div>
    )
}

export default ReducerContainer;