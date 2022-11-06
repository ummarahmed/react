//rfc - to get quick 'react functino base component'
import React, {useState} from 'react';

// impt
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUPClick = ()=>{
        // let txt = document.getElementById("myBox").value.toUpperCase();
        // let txt = getSel("myBox").toUpperCase();
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowerClick = ()=>{
        // let txt = document.getElementById("myBox").value.toLowerCase();
        // let txt = getSel("myBox")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text Value"; // wrong way
    // setText("New Text updated"); // correct way

    function getSel(boxId)
    {
        var txtarea = document.getElementById(boxId);
        var start = txtarea.selectionStart;
        var finish = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, finish);
        return sel
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-3" onClick={handlelowerClick}>lowercase</button>
    </div>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaulProps = {
    heading: "Your text"
}
