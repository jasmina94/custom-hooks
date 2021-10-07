import React, { useState } from "react";
import MemoExample from "../components/MemoExample";

const myInitialObject = {
    id: 1,
    someMethod: () => {
        return new Promise(function (res, rej) {
            res('Hello from initial object with id: 1');
        });
    }
}


const MemoContainer = () => {
    const [obj, setObj] = useState(myInitialObject);
    const [message, setMessage] = useState('');

    const submitMessage = () => {
        const random = Math.round(Math.random(0, 1));
        console.log('random generated: ', random);

        if (!random) {
            let newObj = {
                id: myInitialObject.id + 1,
                someMethod: () => {
                    return new Promise(function (res, rej) {
                        res(message);
                    });
                }
            }
            console.log('new obj: ', newObj);

            setObj(newObj);
        }
    }

    return (
        <div>
            <MemoExample obj={obj} />
            <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="button" onClick={submitMessage}>Submit message</button>
        </div>
    )
}


export default MemoContainer;