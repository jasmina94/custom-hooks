import { useState, useCallback, useEffect } from "react";


const useAsync = (asyncFunction, immediate = true) => {

    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    // Memoized logic
    // This will be the same object in memory, since asyncFunction changes
    const execute = useCallback(() => {
        setStatus('pending');
        setValue(null);
        setError(null);

        return asyncFunction()
            .then((response) => {
                setValue(response);
                setStatus('success');
            })
            .catch((error) => {
                setError(error);
                setStatus('error');
            });

    }, [asyncFunction]);

    useEffect(() => {
        console.log('use effect of hook');
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, value, error };
}

export default useAsync;