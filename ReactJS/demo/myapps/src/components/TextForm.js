import React, { useState } from "react";

export default function TextForm(props) {
  const convertUpperCase = () => {
    //console.log("uppercase converted");
    let up = text.toUpperCase();
    setText(up);
    props.showAlert('Converted to UpperCase','Success');
    
  };
  const convertLowerCase = () => {
    //console.log("LowerCase converted");
    let up = text.toLowerCase();
    setText(up);
    props.showAlert('Converted to LowerCase','Success');
  };
  const clearTxt = () => {
    //console.log("Text cleared");
    let up = "";
    setText(up);
    props.showAlert('Text has been cleared','Success');
  };
  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'? '#2a273c': 'white', color:props.mode=== 'dark'?'white': 'black'}}
          />
          <button
            className="btn btn-primary  my-2 mx-1"
            onClick={convertUpperCase}
          >
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={convertLowerCase}>
            Convert to LowerCase
          </button>

          <button className="btn btn-primary mx-1" onClick={clearTxt}>
            Clear TextArea
          </button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>

        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        </div>
        
      </div>
    </>
  );
}
