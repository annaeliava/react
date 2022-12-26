import React, { useState } from "react";

export default function Chat() {
    const [text, setText] = useState('');
    const [messages, setMessage] = useState([]);

    const handleChange = (e) => {
        setText({ ...text, content: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const arrayMessages = [...messages];
        arrayMessages.unshift(text.message);
        setMessage(arrayMessages);
    };

    return (
        <>
            <div className="chatContainer">
                <div>
                    {messages.map((message) => (
                        <div>
                            <span>{message}</span>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input data-name={'message'} type="text" onChange={handleChange} value={text.message} />
                <input type='submit' value='Send' />
            </form>
        </>
    );
}