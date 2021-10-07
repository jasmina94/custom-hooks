import { useDebugValue, useEffect, useReducer } from "react";

/**
 * Custom hook that works exactly like useState.
 * It uses useReducer to manage state.
 */
const useMyState = (initialState, reducer) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch];
}

export default useMyState;