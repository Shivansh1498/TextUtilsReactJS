import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    };

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();  // To select Text
        navigator.clipboard.writeText(text.value);  // To copy text
        props.showAlert("Text Copied", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces deleted", "success");
    };

    const handleChange = (events) => {
        setText(events.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
