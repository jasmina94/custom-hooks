import { useRef } from "react";
import UserSettings from '../components/UserSettings';
import AnotherSettings from '../components/AnotherSettings';

/**
 * Example for using useImperativeHandle hook.
 * Passing the ref, parent component has ability to run defined action in child component.
 * In this case -> action is submit()
 * 
 * @returns React component
 */
const SettingsContainer = () => {
    const userSettingsRef = useRef();
    const anotherSettingsRef = useRef();

    const onSubmit = () => Promise.all([
        userSettingsRef.current.submit(),
        anotherSettingsRef.current.submit()
    ]);

    return (
        <div>
            <UserSettings passedInRef={userSettingsRef} />
            <AnotherSettings passedInRef={anotherSettingsRef} />

            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default SettingsContainer;