// import Navbar from './Navbar';
import React, {useState} from 'react'
import "../App.css";


export default function Label  (props) {
    const [text, setText] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    // console.log("text uppercase", textUppercase);
    
    const handleChange = (event) => {
        // console.log('handle change' handleChange)
        setText(event.target.value)

         // Store the current state in history when input changes
    setHistory((prevHistory) => [
      ...prevHistory.slice(0, historyIndex + 1),
      text
    ]);
    setHistoryIndex(historyIndex + 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };


    const toUppercase = () => {
        setText(text.toUpperCase(""))
        props.showAlert("Converted to upper case", "success")
    }

    const toLowercase = () => {
        setText(text.toLowerCase(""))
    }

    const clearText= () => {
      setText("")
      props.showAlert("Text cleared", "success")
    }

    const handleCopy = () => {
      console.log("Copied")
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      // console.log(alert("Text Copied"))
      props.showAlert("Your text has been copied to your clipboard", "success")
    }

    

    // let  myStyle = {
    //   backgroundColor: 'black',
    //   color: 'white',
    //   border: '1px solid blue',
    // }

      // const setDarkMode = () => {
      //   document.querySelector("body").setAttribute('data-theme', 'dark')
      // }

      // const setLightMode = () => {
      //   document.querySelector("body").setAttribute('data-theme', 'light')
      // }

      // const toggleTheme = (e) => {
      //   if (e.target.checked) setDarkMode();
      //   else setLightMode()
      // }
    
 
  return (
    <div 
    // style={myStyle}
    >
      
      <div className='m-1' style={{color: props.mode === 'light'?"black":"white"}}>
        <h4 className="m-5">{props.heading}</h4>
      </div>
      <div className="form-floating m-5" style={{color: props.mode === 'light'?"black":"white"}}>
        <textarea
          className="form-control m-1 border border-black"
          placeholder="Write or Paste Your Text Here.."
          id='myBox'
          rows="8"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.mode === 'light'?"white":"#383a4a", color: props.mode === 'light'?"black":"white"}}>
          </textarea>
        <label htmlFor="floatingTextarea" className="mt-0.05">
          Write Your Text Here..
        </label>

      <div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={toUppercase} >
          To-Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={toLowercase}> To-Lowercase </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={clearText}> Clear </button>

        <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleUndo}> Undo </button>

        <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleCopy}> Copy </button>
        </div>


        </div>

      <div className="m-5"  style={{color: props.mode === 'light'?"black":"white"}}>
        <h2 className="font-monospace">Text Summary</h2>
        <p className="fw-light">
          Letters <span className='fw-bold'>{text.length}</span>,
          Words <span className='fw-bold'>{text.split(" ").filter((element) => {return element.length!==0}).length}</span>,
          Comma ,
          Full stop,
        </p>
        <h4 >Text Preview</h4>
        <p>{text.length>0?text:"Enter Something in the text Box to Preview it here.."}</p>
      </div>

      
    </div>
  );
}