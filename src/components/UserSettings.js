import React, { useState, useImperativeHandle } from "react";

const UserSettings = ({ passedInRef }) => {
    const [userSettings, setUserSettings] = useState(['param1', 'somethingCool', 101]);
    const [errorMessage, setErrorMessage] = useState(null);

    const submitUserSettings = (settings) => {
        console.log(settings);
        console.log('Submit user settings');
    }

    useImperativeHandle(passedInRef, () => ({
        submit: () => {
            if (userSettings.length === 0) {
                setErrorMessage("Settings length less than 1"); // If we have invalid settings onSubmit
                return Promise.reject();
            }

            return submitUserSettings(userSettings)
        }
    }));

    return (
        <div>
            {errorMessage}
            <p>User settings snip</p>
        </div>
    )
}

export default UserSettings;