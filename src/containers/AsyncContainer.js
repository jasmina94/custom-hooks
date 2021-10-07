import useAsync from "../customHooks/UseAsync";

const myFunction = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5
                ? res('Successfully submit')
                : rej('Oh no! Error occurred');
        }, 2000);
    })
}

const AsyncContainer = () => {
    const { execute, status, value, error } = useAsync(myFunction, false);
    return (
        <div>
            {status === 'idle' && <div>Start your journey by clicking the button</div>}
            {status === 'success' && <div>{value}</div>}
            {status === 'error' && <div>{error}</div>}
            <button onClick={execute} disabled={status === 'pending'}>
                {status !== 'pending' ? 'Click me' : 'Loading'}
            </button>
        </div>
    )
}


export default AsyncContainer;