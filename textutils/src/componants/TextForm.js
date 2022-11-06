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
    const copyTextToClipboard = ()=>{
        let newText = text;
        // newText.select();
        // newText.setSelectionRange(0,99999); // for mobiles

        navigator.clipboard.writeText(newText);
    }
    const pasteText = ()=>{
        let clipText =  navigator.clipboard.readText()
        .then((pText)=>{
            //  return text;
             console.log("Clip Text: "+pText);
             let newText = text+pText;
             setText(newText);
             
        })
        .catch((error)=>{
            //  return ;
             console.log("error - no text");
        });
        // console.log("Clip Text: "+clipText.text);
    }
    const clear = ()=>{
        setText("");
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text Value"; // wrong way
    // setText("New Text updated"); // correct way

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick}>lowercase</button>
        <button className='btn btn-primary mx-2' onClick={copyTextToClipboard}>Copy to clipboard</button>
        <button className='btn btn-primary mx-2' onClick={pasteText}>Paste text</button>
        <button className="btn btn-primary max-2" onClick={clear}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p><b>{text.split(' ').length}</b> words and <b>{text.length}</b> characters. <b>{(text.split(' ').length)*0.008}</b> minutes require to read the passage.</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>

    </>
  )
}

TextForm.prototypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaulProps = {
    heading: "Your text"
}
