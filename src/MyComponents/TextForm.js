import React, { useState } from 'react'


export default function TextForm(props) {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: "1px solid white"
  })
  const [btnText, setbtnText] = useState("Dark Mode")

  const textArea = {
    border:'1px solid black'
  }
  const darkLight = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        
      })
      document.body.style.backgroundColor = "black"
      setbtnText("Light Mode")
      var element = document.getElementById("btn-dark");

      element.classList.add("btn-light");
      element.classList.remove("btn-dark");
      var element = document.getElementById("navbar");
      element.classList.add("navbar-dark", "bg-dark");
      element.classList.remove("navbar-light", "bg-light");
      var text = document.getElementById("myBox");
      text.style.backgroundColor = "black";
      document.title = "TextUtils - DarkMode"
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: "1px solid white"

      })
      setbtnText("Dark Mode")
      document.body.style.backgroundColor = "white"
      var element = document.getElementById("btn-dark");
      
      element.classList.add("btn-dark");
      element.classList.remove("btn-light");
      var element = document.getElementById("navbar");
      element.classList.remove("navbar-dark", "bg-dark");
      element.classList.add("navbar-dark", "bg-primary");
      var text = document.getElementById("myBox1");
      text.style.backgroundColor = "white";
      text.style.border = "1px solid black";
      document.title = "TextUtils - LightMode"
    }
  }
  const handleOnClick = () => {
    console.log("Uppercase is clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  }

  const clearText = () => {
    console.log("Clear Text");
    let clearAll = ""
    setText(clearAll.trim());
  }

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <h1 style={myStyle}>{props.heading}</h1>
        <div className="form-group" id="myBox1" style={textArea}>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" style={myStyle}></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 clear" onClick={clearText}>Clear</button>
        <button className="btn btn-primary my-3 clear" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary my-3 clear" onClick={removeSpaces}>Remove Space</button>
        <button type="button" id="btn-dark" class="btn btn-dark my-4 mx-2" onClick={darkLight}>{btnText}</button>
      </div>
      <div className="container" style={myStyle}>
        <h1 >Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes will required to read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  )
}
