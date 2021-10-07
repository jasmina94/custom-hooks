import React, { useState, useImperativeHandle } from "react";

const AnotherSettings = ({ passedInRef }) => {
    const [randomSettings, setRandomSettings] = useState([1, 2, 3]);
    const [errorMessage, setErrorMessage] = useState(null);

    const submitRandomSettings = (settings) => {
        console.log(settings);
        console.log('Submit user settings');
    }

    useImperativeHandle(passedInRef, () => ({
        submit: () => {
            if (randomSettings.length === 0) {
                setErrorMessage("Random settings length less than 1"); // If we have invalid settings onSubmit
                return Promise.reject();
            }

            return submitRandomSettings(randomSettings)
        }
    }));

    return (
        <div>
            {errorMessage}
            <p>Another settings settings snip</p>
        </div>
    )
}

export default AnotherSettings;