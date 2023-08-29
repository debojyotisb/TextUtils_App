// import Navbar from './Navbar';
import React, {useState} from 'react'
import "../App.css";


export default function Label  (props) {
    const [text, setText] = useState("");
    const [temp, setTemp] = useState("");
    

    // console.log("text uppercase", textUppercase);
    
    const handleChange = (event) => {
        // console.log('handle change' handleChange)
        setText(event.target.value)

         // Store the current state in history when input changes
    };

    const toUppercase = () => {
        setText(text.toUpperCase(""))
        props.showAlert("Converted to upper case", "success")
    }

    const toLowercase = () => {
        setText(text.toLowerCase(""))
    }

    const clearText= () => {
      setTemp(text)
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

    const handleUndo = () => {
      setText(temp)
    }

    const handleCapitalize = () => {
      const result = text.split(" ");
      let result2 = result.map( items => {
        // console.log("items[0]", items[0])
        return (items[0].toUpperCase()) + items.slice(1)
      })
      // console.log("result2", result2);
      let resultToString = result2.join(" ");
      // console.log("resultToString", resultToString);
      // return resultToString;
      setText(resultToString);
    }
    
    const handleExtractLinks = () => {
      
    }

    const handleExtractNumbers = () => {
      
    }

    const handleExtraSpaces = () => {
      
    }

    const handleSpecialCharacters = () => {
      
    }

    const handleFindReplace = () => {
      
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
    
    <div className='container p-1'>
      
      <div className='m-1' style={{color: props.mode === 'light'?"black":"white"}}>
        <h4 className="m-5">{props.heading}</h4>
      </div>
      <div className="form-floating m-5" style={{color: props.mode === 'light'?"black":"white"}}>
        <form method='post'>
        <textarea
          className="form-control m-1 border border-black"
          placeholder="Write or Paste Your Text Here.."
          id='myBox'
          rows="5"
          cols="40"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.mode === 'light'?"white":"#62699b", color: props.mode === 'light'?"black":"white"}}>
          </textarea>
        
        </form>
        </div>

      <div className='container m-5'>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={toUppercase} 
          disabled={text.length < 1} > To-Uppercase </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={toLowercase}
          disabled={text.length <1 }> To-Lowercase </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={clearText}
          disabled={text.length <1 }> Clear </button>

        <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleUndo} > Undo </button>

        <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleCopy}
          disabled={text.length <1 }> Copy </button>
        
        <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleCapitalize}
          disabled={text.length < 1} > To-Capitalize Word </button>

          <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleExtractLinks}
          disabled={text.length < 1} > Extract Links </button>
          
          <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleExtractNumbers}
          disabled={text.length < 1} > Extract Numbers </button>
          
          <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleExtraSpaces}
          disabled={text.length < 1} > Remove Extra Spaces </button>
          
          <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleSpecialCharacters}
          disabled={text.length < 1} > Remove Special Characters </button>
          
          <button
          type="button"
          className="btn btn-primary m-2" 
          onClick={handleFindReplace}
          disabled={text.length < 1} > Find/Replace </button>

             

    </div>


      <div className="m-5"  style={{color: props.mode === 'light'?"black":"white"}}>
        <h2 className="font-monospace">Text Summary</h2>
        <p className="fw-light">
          Letters <span className='fw-bold'>{text.length}</span>,
          Words <span className='fw-bold'>{text.split(" ").filter((element) => {return element.length!==0}).length}</span>,
          
        </p>
        <h4> Text Preview </h4>
        <p>{text.length>0?text:"Enter Something in the text Box to Preview it here.."}</p>
      </div>

      
    </div>
  );
}