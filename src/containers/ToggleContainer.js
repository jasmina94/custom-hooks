import useToggle from "../customHooks/Togggle";

const ToggleContainer = () => {
    const [isTextChanged, setIsTextChanged] = useToggle();

    return (
        <div className="d-flex flex-column">
            <p>Toggle example</p>
            <button onClick={setIsTextChanged} className="btn btn-success w-25">
                {isTextChanged ? 'Togggled' : 'Click to Toggle'}
            </button>
        </div>
    )
}

export default ToggleContainer;